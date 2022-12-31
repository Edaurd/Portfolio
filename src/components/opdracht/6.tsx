import React from "react";

interface TimerProps {
  interval: number;
}

interface RandomProps {
  interval: number;
  min: number;
  max: number;
}

const Timer = ({ interval }: TimerProps) => {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    let handle = setInterval(() => {
      setNumber((number) => number + 1);
    }, interval);

    return () => {
      clearInterval(handle);
    };
  }, [interval]);

  return <p>{number}</p>;
};

const CurrentTime = ({ interval }: TimerProps) => {
  const date = new Date();
  const [hours, setHours] = React.useState<number>(date.getHours());
  const [minutes, setMinutes] = React.useState<number>(date.getMinutes());
  const [seconds, setSeconds] = React.useState<number>(date.getSeconds());

  React.useEffect(() => {
    let handle = setInterval(() => {
      setHours(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(
        (seconds) =>
          (seconds =
            seconds === 59 ? (seconds = 0) : (seconds = date.getSeconds() + 1))
      );
    }, interval);

    return () => {
      clearInterval(handle);
    };
  }, [seconds]);

  return (
    <>
      <p>
        Current time:{" "}
        <strong>
          {hours.toString().length === 1 ? `0${hours}` : hours} :{" "}
          {minutes.toString().length === 1 ? `0${minutes}` : minutes} :{" "}
          {seconds.toString().length === 1 ? `0${seconds}` : seconds}
        </strong>
      </p>
    </>
  );
};

const RandomValue = ({ interval, min, max }: RandomProps) => {
  const [random, setRandom] = React.useState<number>(
    Math.round(Math.random() * (max - min) + min)
  );

  React.useEffect(() => {
    let handle = setInterval(() => {
      setRandom(Math.round(Math.random() * (max - min) + min));
    }, interval);
    return () => {
      clearInterval(handle);
    };
  }, [interval, random]);

  return (
    <>
      <p>
        Random value between {min} and {max}: {random}{" "}
      </p>
    </>
  );
};

const Zes = () => {
  const [timerInterval, setTimerInterval] = React.useState(1000);

  return (
    <>
      <Timer interval={timerInterval} />
      <CurrentTime interval={timerInterval} />
      <RandomValue interval={timerInterval * 2} min={1} max={100} />
      <RandomValue interval={timerInterval * 2} min={100} max={200} />
    </>
  );
};

export default Zes;
