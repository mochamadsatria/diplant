import { Link, useParams } from "react-router-dom";
import { storeItem as lavItem } from "./assets/data/lavender";
import { storeItem as tulItem } from "./assets/data/tulip";

export default function Store() {
  const { id } = useParams();

  return (
    <div className="px-10 py-5">
      <h3 className="text-lg font-bold mb-3">Select one item:</h3>
      <ul className="flex flex-col gap-2">
        {id == "lavendar"
          ? lavItem.map((item) => (
              <li key={item.id} className="">
                <Link to={`/checkout/${item.id}`}>
                  <div className="py-2 px-5 bg-red-200 rounded flex justify-between">
                    <span className=" font-bold">{item.name}</span>
                    <span className=" font-bold">{item.price}&nbsp;DESO</span>
                  </div>
                </Link>
              </li>
            ))
          : tulItem.map((item) => (
              <li key={item.id} className="">
                <Link to="/">
                  <div className="py-2 px-5 bg-red-200 rounded flex justify-between">
                    <span className=" font-bold">{item.name}</span>
                    <span className=" font-bold">{item.price}&nbsp;DESO</span>
                  </div>
                </Link>
              </li>
            ))}
      </ul>

      <div className="prose prose-sm mt-5">
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
}
