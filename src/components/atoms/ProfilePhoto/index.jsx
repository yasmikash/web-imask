import React from "react";

const ProfilePhoto = ({ photo }) => {
  return <img src={photo} className="rounded-full h-11 w-11 cursor-pointer" />;
};

export default ProfilePhoto;
