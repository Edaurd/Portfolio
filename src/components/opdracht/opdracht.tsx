import Een from "./1";
import Twee from "./2";
import Drie from "./3";
import Vier from "./4";
import Vijf from "./5";
import Zes from "./6";
import Zeven from "./7";
import Acht from "./8";

type OpdrachtProperty = {
  code: any;
};

const Opdracht = ({ code }: OpdrachtProperty) => {
  var num = parseInt(code);
  if (num === 1) {
    return <Een />;
  } else if (num === 2) {
    return <Twee />;
  } else if (num === 3) {
    return <Drie />;
  } else if (num === 4) {
    return <Vier />;
  } else if (num === 5) {
    return <Vijf />;
  } else if (num === 6) {
    return <Zes />;
  } else if (num === 7) {
    return <Zeven />;
  } else if (num === 8) {
    return <Acht />;
  } else {
    return <>Opdracht Niet Gevonden</>;
  }
};

export default Opdracht;
