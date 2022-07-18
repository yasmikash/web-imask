import React, { useState } from "react";
import { LoginCard } from "../components/organisms";
import { useApp } from "../context/AppContext";
import { REQUEST_STATUS } from "../utils/constants";

const LoginContainer = () => {
  const { userLogin, requestStatus } = useApp();
  const [idNo, setiDNo] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChangeIdNo = (event) => {
    setiDNo(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const data = { NIC: idNo, password };
    userLogin(data);
  };

  return (
    <LoginCard
      onChangeIdNo={handleChangeIdNo}
      onChangePassword={handleChangePassword}
      idNo={idNo}
      password={password}
      onLogin={handleSubmit}
      disabled={REQUEST_STATUS.PENDING === requestStatus.login}
    />
  );
};

export default LoginContainer;
