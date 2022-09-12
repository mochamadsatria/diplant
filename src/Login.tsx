import { useEffect, useState } from "react";

// @ts-ignore
import BitcloutLogin from "react-bitclout-login";

import LockOpenIcon from "@material-ui/icons/LockOpen";

import { useCookies } from "react-cookie";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const [cookies, setCookie] = useCookies(["account"]);

  let navigate = useNavigate();

  const responseClout = (response: any) => {
    setCookie("account", response, { path: "/" });
  };

  useEffect(() => {
    if (cookies.account) navigate("/", { replace: true });
  }, [cookies.account]);

  const accessLevel = 4;

  const JWT = true;

  if (!cookies.account)
    return (
      <div className="flex flex-col gap-5 px-10 mt-20">
        <h1 className="font-bold text-3xl">Login</h1>
        <BitcloutLogin
          accessLevel={accessLevel}
          onSuccess={responseClout}
          onFailure={responseClout}
          JWT={JWT}
          //customization={{className: classes.loginButton}}
          customIcon={<LockOpenIcon />}
        />
      </div>
    );

  return <div></div>;
}
