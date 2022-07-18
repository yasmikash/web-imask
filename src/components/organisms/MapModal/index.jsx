import React from "react";

import { Dialog } from "@headlessui/react";

const MapModal = ({ isOpen, onModalClose }) => {
  return (
    <Dialog open={isOpen} onClose={onModalClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="text-gray-800 w-3/4 h-3/4 rounded bg-white p-4">
          <Dialog.Title
            as="h4"
            className="mb-4 font-semibold pb-2 border-b-4 border-b-green-100"
          >
            Location Tracking
          </Dialog.Title>
          <Dialog.Description
            as="div"
            className="flex flex-col justify-center items-center"
          >
            <iframe
              src="http://maps.google.com/maps?q=6.7049,80.1698&z=16&output=embed"
              height="350"
              width="900"
            ></iframe>
            <p className="text-xs mt-2">
              Location tracking enables users to track the locations they have
              visited during the day.
            </p>
          </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default MapModal;
