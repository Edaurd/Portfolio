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
          name="Labo 5 Oef 2"
          description="Pokemon, Gotto Catch Em All"
          link="portfolio/voorbeeld-1"
        />
        <Tegel
          name="Labo 4 Oef 5"
          description="1, 2, 3... allegeluk telt de computer ook"
          link="portfolio/voorbeeld-2"
        />
        <Tegel
          name="Labo 4 Oef 2"
          description="Rood, Groen, Geel en alle andere kleuren"
          link="portfolio/voorbeeld-3"
        />
        <Tegel
          name="Tegel 4"
          description="Description for Tegel 4"
          link="portfolio/voorbeeld-4"
        />
        <Tegel
          name="Tegel 5"
          description="Description for Tegel 5"
          link="portfolio/voorbeeld-5"
        />
        <Tegel
          name="Labo 5 Oef 1"
          description="Een simpele timer met wat extra randomness"
          link="portfolio/voorbeeld-6"
        />
        <Tegel
          name="Tegel 7"
          description="Description for Tegel 7"
          link="portfolio/voorbeeld-7"
        />
        <Tegel
          name="Tegel 8"
          description="Description for Tegel 8"
          link="portfolio/voorbeeld-8"
        />
      </div>
    </>
  );
};

export default Opdrachten;
