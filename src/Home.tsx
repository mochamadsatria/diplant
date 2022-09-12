import { HeaderA } from "./components/Header";

import { Link } from "react-router-dom";
import { plants } from "./assets/constants";

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <header>
        <HeaderA />
      </header>

      <section className="py-5">
        <LayoutB />
      </section>
    </div>
  );
}

/*function LayoutA() {
  return (
    <ul className="list-none flex justify-between">
      {plants.map((plant) => (
        <li key={plant.name} className="">
          <img
            src={plant.cover}
            width="200"
            height="200"
            className="absolute z-50"
          />
          <div
            style={{ backgroundColor: plant.bg }}
            className="absolute z-40 h-40"
          >
            <h1
              className="text-2xl font-bold tracking-wide"
              style={{ color: plant.color }}
            >
              {plant.name}
            </h1>
          </div>
        </li>
      ))}
    </ul>
  );
}*/

function LayoutB() {
  return (
    <ul className="list-none flex flex-col gap-3 px-10">
      {plants.map((plant) => (
        <li
          key={plant.name}
          className=" bg-no-repeat bg-origin-content bg-center rounded"
          style={{
            backgroundImage: `url(${plant.cover})`,
            backgroundColor: plant.bg,
            backgroundSize: "300px 300px",
          }}
        >
          <Link to={`/${plant.id}`}>
            <div className="py-4 px-8">
              <h1
                className="text-xl font-bold tracking-wide"
                style={{ color: plant.color }}
              >
                {plant.name}
              </h1>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
