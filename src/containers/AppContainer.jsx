import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import AppContext from "../context/AppContext";
import {
  userLoginApi,
  adminLoginApi,
  fecthUserProfileApi,
  fecthAnalyzedAllApi,
  fecthAnalyzedStatusApi,
  fecthAnalyzedBpmApi,
  fecthAnalyzedHeartRateApi,
  fecthAnalyzedCoughRateApi,
  fecthAnalyzedSpo2Api,
  fecthAnalyzedTempApi,
  fecthAdminProfileApi,
  createFlagLocationsApi,
  fetchFlaggedLocationsApi,
} from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import {
  ADMIN_MODE,
  REQUEST_STATUS,
  USER_LOGIN,
  USER_MODE,
} from "../utils/constants";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const requestStatusInit = {
  login: REQUEST_STATUS.IDLE,
  fetchUserProfile: REQUEST_STATUS.IDLE,
  fecthAnalyzedAll: REQUEST_STATUS.IDLE,
  updateUserProfile: REQUEST_STATUS.IDLE,
  fecthAnalyzedStatus: REQUEST_STATUS.IDLE,
  fecthAnalyzedBpm: REQUEST_STATUS.IDLE,
  fecthAnalyzedHeartRate: REQUEST_STATUS.IDLE,
  fecthAnalyzedTemp: REQUEST_STATUS.IDLE,
  fecthAnalyzedSpo2: REQUEST_STATUS.IDLE,
  fecthAnalyzedCoughRate: REQUEST_STATUS.IDLE,
  fetchFlaggedLocations: REQUEST_STATUS.IDLE,
};

const stateUpdate = (state) => (prevState) => {
  return { ...prevState, ...state };
};

const AppContainer = ({ children }) => {
  const storedToken = localStorage.getItem("imask-token") || null;

  let decodedToken;
  let userType;
  if (storedToken) {
    decodedToken = jwtDecode(storedToken);
    userType = decodedToken.userType;
  }
  const [authMode, setAuthMode] = useState(
    userType === "user" ? USER_MODE : userType === "admin" ? ADMIN_MODE : null
  );
  const navigate = useNavigate();
  const [token, setToken] = useState(storedToken);
  const [userProfile, setUserProfile] = useState(null);
  const [requestStatus, setRequestStatus] = useState(requestStatusInit);
  const [analyzedAll, setAnalyzedAll] = useState(null);
  const [analyzedStatus, setAnalyzedStatus] = useState(null);
  const [analyzedBpm, setAnalyzedBpm] = useState(null);
  const [analyzedHeartRate, setAnalyzedHeartRate] = useState(null);
  const [analyzedTemp, setAnalyzedTemp] = useState(null);
  const [analyzedCoughRate, setAnalyzedCoughRate] = useState(null);
  const [analyzedSpo2, setAnalyzedSpo2] = useState(null);
  const [flaggedLocations, setFlaggedLocations] = useState(null);
  const [isMapModalOpen, setMapModalOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("imask-token");
    setToken(null);
    setUserProfile(null);
    navigate("/login");
  };

  const userLogin = async (loginType, data) => {
    try {
      setRequestStatus(stateUpdate({ login: REQUEST_STATUS.PENDING }));
      let result;
      if (loginType === USER_LOGIN) {
        result = await userLoginApi(data);
      } else {
        result = await adminLoginApi(data);
      }
      const { token, profile } = result;
      setToken(token);
      setUserProfile(profile);
      setRequestStatus(stateUpdate({ login: REQUEST_STATUS.FAILED }));
      localStorage.setItem("imask-token", token);
      if (loginType === USER_LOGIN) {
        setAuthMode(USER_MODE);
        navigate("/", { replace: true });
      } else {
        setAuthMode(ADMIN_MODE);
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      setRequestStatus(stateUpdate({ login: REQUEST_STATUS.FAILED }));
      toast.error(error.message);
    }
  };

  const fetchUserProfile = async () => {
    try {
      setRequestStatus(
        stateUpdate({ fetchUserProfile: REQUEST_STATUS.PENDING })
      );
      let result;
      if (authMode === USER_MODE) result = await fecthUserProfileApi(token);
      if (authMode === ADMIN_MODE) result = await fecthAdminProfileApi(token);
      setUserProfile(result);
      setRequestStatus(
        stateUpdate({ fetchUserProfile: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fetchUserProfile: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedAll = async () => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedAll: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedAllApi(token);
      setAnalyzedAll(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedAll: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedAll: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedStatus = async (data) => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedStatus: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedStatusApi(data, token);
      setAnalyzedStatus(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedStatus: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedStatus: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedBpm = async (data) => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedBpm: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedBpmApi(data, token);
      setAnalyzedBpm(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedBpm: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedBpm: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedHeartRate = async (data) => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedHeartRate: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedHeartRateApi(data, token);
      setAnalyzedHeartRate(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedHeartRate: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedHeartRate: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedCoughRate = async (data) => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedCoughRate: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedCoughRateApi(data, token);
      setAnalyzedCoughRate(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedCoughRate: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedCoughRate: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedSpo2 = async (data) => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedSpo2: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedSpo2Api(data, token);
      setAnalyzedSpo2(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedSpo2: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedSpo2: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const fecthAnalyzedTemp = async (data) => {
    try {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedTemp: REQUEST_STATUS.PENDING })
      );
      const result = await fecthAnalyzedTempApi(data, token);
      setAnalyzedTemp(result);
      setRequestStatus(
        stateUpdate({ fecthAnalyzedTemp: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      setRequestStatus(
        stateUpdate({ fecthAnalyzedTemp: REQUEST_STATUS.FAILED })
      );
      toast.error(error.message);
    }
  };

  const createFlagLocations = async (data) => {
    try {
      await createFlagLocationsApi(data, token);
      toast.success("Location has been updated");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchFlaggedLocations = async () => {
    try {
      setRequestStatus(
        stateUpdate({ fetchFlaggedLocations: REQUEST_STATUS.PENDING })
      );
      const result = await fetchFlaggedLocationsApi(token);
      setFlaggedLocations(result);
      setRequestStatus(
        stateUpdate({ fetchFlaggedLocations: REQUEST_STATUS.FULFILLED })
      );
    } catch (error) {
      toast.error(error.message);
      setRequestStatus(
        stateUpdate({ fetchFlaggedLocations: REQUEST_STATUS.FAILED })
      );
    }
  };

  const openMapModal = () => {
    setMapModalOpen(true);
  };

  const closeMapModal = () => {
    setMapModalOpen(false);
  };

  return (
    <>
      <AppContext.Provider
        value={{
          userLogin,
          setToken,
          fetchUserProfile,
          fecthAnalyzedAll,
          fecthAnalyzedStatus,
          fecthAnalyzedBpm,
          fecthAnalyzedCoughRate,
          fecthAnalyzedHeartRate,
          fecthAnalyzedTemp,
          fecthAnalyzedSpo2,
          createFlagLocations,
          fetchFlaggedLocations,
          logout,
          openMapModal,
          closeMapModal,
          authMode,
          isMapModalOpen,
          requestStatus,
          token,
          userProfile,
          flaggedLocations,
          analyzedAll,
          analyzedStatus,
          analyzedBpm,
          analyzedCoughRate,
          analyzedHeartRate,
          analyzedTemp,
          analyzedSpo2,
        }}
      >
        {children}
      </AppContext.Provider>
      <ToastContainer position="bottom-center" />
    </>
  );
};

export default AppContainer;
