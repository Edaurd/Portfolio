import React from "react";
import "./Portfolio.css";

const Tegel: React.FC<{ name: string; description: string; link: string }> = ({
  name,
  description,
  link,
}) => {
  const handleClick = () => {
    window.location.assign(link);
  };

  return (
    <div className="Tegel" onClick={handleClick}>
      <h3>{name}</h3>
      <p>{description}</p>
      <button>Bekijk</button>
    </div>
  );
};

const Opdrachten: React.FC = () => {
  return (
    <>
      <div className="grid">
        <Tegel
          name="Pokemon"
          description="A wild Laboefening appeared"
          link="portfolio/voorbeeld-1"
        />
        <Tegel
          name="Counter list"
          description="1, 2, 3... allegeluk telt de computer ook"
          link="portfolio/voorbeeld-2"
        />
        <Tegel
          name="Kleuren Selectie"
          description="Rood, Groen, Geel en alle andere kleuren"
          link="portfolio/voorbeeld-3"
        />
        <Tegel
          name="Filtering en sorting"
          description="And they said flash was fast"
          link="portfolio/voorbeeld-4"
        />
        <Tegel
          name="Tic Tac Toe"
          description="eerst de hoeken nemen om altijd te winnen"
          link="portfolio/voorbeeld-5"
        />
        <Tegel
          name="Interval"
          description="tick tock tick tock geen tiktok"
          link="portfolio/voorbeeld-6"
        />
        <Tegel
          name="LocalStorage"
          description="Hi LocalStorage, I'm Dad"
          link="portfolio/voorbeeld-7"
        />
        <Tegel
          name="Slots"
          description="Online gokken met geld is verboden in belgie"
          link="portfolio/voorbeeld-8"
        />
      </div>
    </>
  );
};

export default Opdrachten;
