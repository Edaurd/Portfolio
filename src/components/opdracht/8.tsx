import React from "react";
import "./OpdrachtenStyles.css";
import cherry from "../../assets/images/cherry.png";
import lemon from "../../assets/images/lemon.png";
import watermelon from "../../assets/images/watermelon.png";
import grape from "../../assets/images/grape.png";
import seven from "../../assets/images/7.png";

interface slotMachineProps {
  slots: number;
}
interface slotProps {
  value: number;
}
const slotsArr: string[] = [cherry, lemon, watermelon, grape, seven];

const getRandomSlots = (numberOfslots: number) => {
  let slots: number[] = [];
  for (let i = 0; i < numberOfslots; i++) {
    slots.push(Math.round(Math.random() * (slotsArr.length - 1)));
  }
  return slots;
};

const Slot = ({ value }: slotProps) => {
  return <img src={slotsArr[value]} alt="slot" />;
};

const SlotMachine = ({ slots: amountOfSlots }: slotMachineProps) => {
  const [slots, setSlots] = React.useState(getRandomSlots(amountOfSlots));
  const [money, setMoney] = React.useState(100);

  const isWinning = (slots: number[]) => {
    return slots.every((slot) => slot === slots[0]);
  };

  const calculate = () => {
    let randomSlots = getRandomSlots(amountOfSlots);
    setSlots(randomSlots);
    if (isWinning(randomSlots)) {
      randomSlots.every((slot) => slot === 4)
        ? setMoney((money) => money + 100)
        : setMoney((money) => money + 10);
    } else {
      setMoney((money) => money - 1);
    }
  };

  return (
    <>
      <div className="slotContainer">
        <div>
          {money > 0 && <h2>Saldo: monopoly ${money}</h2>}
          {money <= 0 && <p>Je bent bankrupt.</p>}
          <div className="slots">
            <button onClick={calculate} disabled={money <= 0 ? true : false}>
              Pull Lever
            </button>
            {slots.map((slot, index) => (
              <Slot value={slot} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Acht = () => {
  return (
    <div>
      <SlotMachine slots={3} />
    </div>
  );
};

export default Acht;
