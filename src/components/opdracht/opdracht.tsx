import Een from "./1";
import Twee from "./2";
import Drie from "./3";
import Zes from "./6";
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
    return <Drie />;
  } else if (num === 5) {
    return <Zes />;
  } else if (num === 6) {
    return <Zes />;
  } else if (num === 8) {
    return <Zes />;
  } else {
    return <>Opdracht Niet Gevonden</>;
  }
};

export default Opdracht;
