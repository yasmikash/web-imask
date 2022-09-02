import React, { useState } from "react";
import { LoginCard } from "../components/organisms";
import { useApp } from "../context/AppContext";
import { ADMIN_LOGIN, REQUEST_STATUS, USER_LOGIN } from "../utils/constants";

const LoginContainer = () => {
  const { userLogin, requestStatus } = useApp();
  const [idNo, setiDNo] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginType, setLoginType] = useState(USER_LOGIN);

  const handleChangeIdNo = (event) => {
    setiDNo(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const data = { NIC: idNo, password };
    userLogin(loginType, data);
  };

  const handleChaneLoginType = () =>
    setLoginType(loginType === USER_LOGIN ? ADMIN_LOGIN : USER_LOGIN);

  return (
    <LoginCard
      onChangeLoginType={handleChaneLoginType}
      loginType={loginType}
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
