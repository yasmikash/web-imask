import React from "react";
import imaskLogo from "../../../assets/images/imask.png";
import { Button, Input } from "../../atoms";

const LoginCard = ({
  onLogin,
  onChangeIdNo,
  onChangePassword,
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
        iMask Web Login
      </h4>
      <p className="text-xs">
        Your account has to be created using iMask mobile app, and the
        credentias need to be provided to sign in to the web.
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
          onClick={(event) => {
            event.preventDefault();
            onLogin();
          }}
          title="Login"
          disabled={disabled}
        />
      </form>
    </div>
  );
};

export default LoginCard;
