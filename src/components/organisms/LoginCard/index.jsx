import React from "react";
import imaskLogo from "../../../assets/images/imask.png";
import { ADMIN_LOGIN, USER_LOGIN } from "../../../utils/constants";
import { Button, Input } from "../../atoms";

const LoginCard = ({
  onLogin,
  onChangeIdNo,
  onChangePassword,
  onChangeLoginType,
  loginType,
  idNo,
  password,
  disabled,
}) => {
  return (
    <div className="bg-white w-2/5 shadow-md rounded-md p-4 text-gray-800 ">
      <div className="flex justify-center">
        <img src={imaskLogo} />
      </div>
      <h4 className="text-left mb-4 font-semibold pb-2 border-b-4 border-b-green-100">
        iMask Web Login - {loginType === USER_LOGIN ? "User" : "Admin"}
      </h4>
      <p className="text-xs my-4 pl-2 border-l-4 border-l-green-100">
        {loginType === USER_LOGIN &&
          `Sign into your user account to get an insight of your iMask activites.`}
        {loginType === ADMIN_LOGIN &&
          `Sign into your admin portal to administrate iMask functionalities.`}
      </p>
      <form className="flex flex-col gap-4 my-2">
        <Input
          name="idnumber"
          value={idNo}
          onChange={onChangeIdNo}
          label="ID Number"
        />
        <Input
          name="password"
          value={password}
          onChange={onChangePassword}
          label="Password"
          type="password"
        />
        <Button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            onLogin();
          }}
          title="Login"
          disabled={disabled}
        />
      </form>
      <div className="mt-6 flex justify-center align-middle">
        <Button
          variant="green"
          onClick={onChangeLoginType}
          title={loginType === USER_LOGIN ? "Admin Login" : "User Login"}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default LoginCard;
