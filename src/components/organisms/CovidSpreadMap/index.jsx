import React, { useCallback, useRef, useState } from "react";
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import { useEffect } from "react";
import { Button } from "../../atoms";

const CovidSpreadMap = ({ onUpdateLocation, initLocations }) => {
  const [currentLocatoin, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [path, setPath] = useState(initLocations);

  const polygonRef = useRef(null);
  const listenersRef = useRef([]);

  const onEdit = useCallback(() => {
    if (polygonRef.current) {
      const nextPath = polygonRef.current
        .getPath()
        .getArray()
        .map((latLng) => {
          return { lat: latLng.lat(), lng: latLng.lng() };
        });
      setPath(nextPath);
    }
  }, [setPath]);

  const onLoad = useCallback(
    (polygon) => {
      polygonRef.current = polygon;
      const path = polygon.getPath();
      listenersRef.current.push(
        path.addListener("set_at", onEdit),
        path.addListener("insert_at", onEdit),
        path.addListener("remove_at", onEdit)
      );
    },
    [onEdit]
  );

  const onUnmount = useCallback(() => {
    listenersRef.current.forEach((lis) => lis.remove());
    polygonRef.current = null;
  }, []);

  const onClickUpdateLocation = () => onUpdateLocation(path);

  useEffect(() => {
    if (!navigator.geolocation)
      throw new Error("Browser does not support geolocation feature");
    const onLocationFetchSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ lat: latitude, lng: longitude });
      setPath([
        { lat: latitude, lng: longitude },
        { lat: latitude, lng: longitude },
        { lat: latitude, lng: longitude },
      ]);
    };

    const onLocationFetchError = (error) => {
      throw error;
    };

    navigator.geolocation.getCurrentPosition(
      onLocationFetchSuccess,
      onLocationFetchError
    );
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="flex flex-col gap-2 absolute bg-white p-4 m-2 rounded-sm shadow-md top-0 left-96 z-50 w-96">
        <div className="text-xs font-medium text-justify">
          Select the area from the map of which you want to flag as a potential
          COVID-19 spreaded area, and click on Update button.
        </div>
        <Button
          title="Update"
          variant="secondary"
          onClick={onClickUpdateLocation}
        />
      </div>
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDGVDy38zC0X7dWLmD2FXms_Pw_hAhHlRg"
        language="en"
        region="us"
      >
        <GoogleMap
          mapContainerClassName="w-full h-full"
          center={{ lat: currentLocatoin.lat, lng: currentLocatoin.lng }}
          zoom={12}
          version="weekly"
          on
        >
          <Polygon
            options={{
              fillColor: "red",
              strokeColor: "red",
            }}
            editable
            draggable
            path={path}
            onMouseUp={onEdit}
            onDragEnd={onEdit}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default CovidSpreadMap;
