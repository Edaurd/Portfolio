import React from "react";
import styled from "styled-components";

interface Counter {
  setSum: React.Dispatch<React.SetStateAction<number>>;
}

const Teller = styled.div`
  display: inline-block;
  justify-content: space-between;
  width: 200px;
`;

const Counter = ({ setSum }: Counter) => {
  const [counter, setCounter] = React.useState<number>(0);

  const Add = () => {
    setCounter((counter) => counter + 1);
    setSum((sum) => sum + 1);
  };
  const Remove = () => {
    setCounter((counter) => counter - 1);
    setSum((sum) => sum - 1);
  };
  return (
    <>
      <Teller>
        <button onClick={Add}>Omhoog</button>
        <p>{counter}</p>
        <button onClick={Remove}>Omlaag</button>
      </Teller>
    </>
  );
};

const CounterHolder = () => {
  const [counterArr, setCounterArr] = React.useState<number[]>([]);
  const [sumOfValues, setSum] = React.useState<number>(0);

  const addCounter = () => {
    const tmpArr = [...counterArr, 0];
    setCounterArr(tmpArr);
  };

  return (
    <>
      <button onClick={addCounter}>Voeg teller toe</button>
      <br />
      <br />
      {[...counterArr].map((counter, index) => (
        <Counter setSum={setSum} key={index} />
      ))}
      <p>Som van de tellers is: {sumOfValues} </p>
    </>
  );
};

const Twee = () => {
  return (
    <div>
      <CounterHolder />
    </div>
  );
};

export default Twee;
