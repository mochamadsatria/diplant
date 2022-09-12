import { Outlet, useParams } from "react-router-dom";
import { HeaderB } from "./components/Header";

export default function Plant() {
  let { id } = useParams();

  return (
    <div>
      <HeaderB id={id as string} />

      <section>
        <Outlet />
      </section>
    </div>
  );
}
