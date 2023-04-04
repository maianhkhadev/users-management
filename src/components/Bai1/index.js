import { useEffect } from "react";
import ShowText from "./ShowText";

const Exam01 = () => {
  const [number, setNumber] = useState(11);

  return <ShowText soThapPhan={number} />;
};

export default Exam01;
