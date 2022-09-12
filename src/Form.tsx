import { useCookies } from "react-cookie";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { HeaderC, HeaderD } from "./components/Header";

export default function Form() {
  const [cookies, setCookie] = useCookies(["account"]);

  let navigate = useNavigate();

  useEffect(() => {
    if (!cookies.account) navigate("/login", { replace: true });
  }, []);

  if (cookies.account)
    return (
      <div>
        <HeaderD />

        <div className="px-10 my-10 flex flex-col gap-3">
          <span className="px-4 py-3 bg-yellow-200">
            This is mocked activity
          </span>

          <div className="flex flex-col ">
            <h2 className="font-bold">Our wallet address:</h2>

            <span>x0xxxxxxxxxxxxxxxx</span>

            <span className="text-sm">
              Please transfer the amount to our wallet.
            </span>
          </div>

          <form className="flex flex-col gap-2">
            <label>Wallet address</label>
            <input type="text" name="wallet" />
            <label>Email address</label>
            <input type="email" name="email" />
            <label>Name</label>
            <input type="text" name="name" />
          </form>

          <button className="py-2 bg-red-200 rounded">Submit</button>
        </div>
      </div>
    );

  return <div></div>;
}
