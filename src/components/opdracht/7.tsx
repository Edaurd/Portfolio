import React from "react";

interface Dadjoke {
  attachments: [
    {
      fallback: string;
      footer: string;
      text: string;
    }
  ];
  response_type: string;
  username: string;
}

const Dadjoke = () => {
  const [joke, setJoke] = React.useState<string>("");
  const [fetchJoke, setFetch] = React.useState<boolean>(false);
  const [jokeCopy, setJokeCopy] = React.useState<string | null>("");
  let run = false;
  const setCopy = () => {
    localStorage.setItem("joke", joke);
    setJokeCopy(joke);
  };

  React.useEffect(() => {
    const url = `https://icanhazdadjoke.com/slack`;
    const fetchFunction = async () => {
      let result = await fetch(url);
      const json: Dadjoke = await result.json();

      setJoke(json.attachments[0].text);
      setJokeCopy(localStorage.getItem("joke"));
    };
    !run && fetchFunction();
    run = !run;
  }, [fetchJoke]);

  return (
    <>
      <div className="dadJokeHolder">
        <div>
          <div className="dadJoke">
            <h2>Dadjokes</h2>
            <p>{joke}</p>
            <button onClick={setCopy}>Set as favorite</button>
            <button onClick={() => setFetch(!fetchJoke)}>New Dadjoke</button>
          </div>
          {localStorage.getItem("joke") && (
            <div className="dadJokeCopy">
              <h2>Favorite</h2>
              <p>{jokeCopy}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Zeven = () => {
  return (
    <>
      <Dadjoke />
    </>
  );
};

export default Zeven;
