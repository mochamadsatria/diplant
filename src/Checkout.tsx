import { Outlet, useParams } from "react-router-dom";
import { storeItem as tulItem } from "./assets/data/tulip";
import { storeItem as lavItem } from "./assets/data/lavender";
import { HeaderC } from "./components/Header";

import { useCookies } from "react-cookie";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [cookies, setCookie] = useCookies(["account"]);

  let navigate = useNavigate();

  useEffect(() => {
    if (!cookies.account) navigate("/login", { replace: true });
  }, []);

  let { itemId } = useParams();

  const onCheckout = () => {
    navigate("form");
  };

  if (cookies.account)
    return (
      <div>
        <HeaderC />

        <div className="px-10 flex flex-col gap-2">
          <h2 className="font-bold text-lg">Selected item:</h2>
          {itemId == "tulip" ? (
            <>
              <span className="py-2 px-4 bg-slate-200 flex justify-between">
                <span>
                  {tulItem.find((item) => item.id == itemId && item)?.name}
                </span>
                <span>
                  {tulItem.find((item) => item.id == itemId && item)?.price}
                  &nbsp;DESO
                </span>
              </span>
            </>
          ) : (
            <>
              <span className="py-2 px-4 bg-slate-200 flex justify-between">
                <span>
                  {lavItem.find((item) => item.id == itemId && item)?.name}
                </span>
                <span>
                  {lavItem.find((item) => item.id == itemId && item)?.price}
                  &nbsp;DESO
                </span>
              </span>
            </>
          )}

          <button
            className="py-3 bg-red-400 rounded font-bold text-white"
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>

        <div className="prose prose-sm mt-5 px-10">
          <h3>How to purchase:</h3>
          <ol>
            <li>Click checkout</li>
            <li>Transfer the amount to our wallet</li>
            <li>Complete the form</li>
          </ol>
        </div>

        <div className="prose prose-sm mt-5 px-10">
          <h3>Rules:</h3>
          <ul>
            <li>
              You can only buy one for each item in one account. This ensures
              everyone has the same right to get the item.{" "}
            </li>
            <li>This purchase is limited to each country's regulation.</li>
          </ul>
        </div>
      </div>
    );

  return <div></div>;
}
