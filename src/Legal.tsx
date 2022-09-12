import { legal as lavLegal } from "./assets/data/lavender";
import { legal as tulLegal } from "./assets/data/tulip";

import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

export default function Legal() {
  const { id } = useParams();

  return (
    <div className="px-10 py-5 prose max-w-sm break-normal overflow-clip">
      <ReactMarkdown children={id == "lavendar" ? lavLegal : tulLegal} />
    </div>
  );
}
