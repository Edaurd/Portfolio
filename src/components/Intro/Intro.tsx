import "./Intro.css";
//import iconImage from "../../images/logo.jpg";

export const Intro = () => {
  return (
    <section id="about" className="container-about">
      <div className="about">
        <h1 className="toptitle">Edu_ard</h1>
        <div className="boxed">🧑‍🎓Student @ AP HogeSchool</div>
        <span className="purple-text">✋Hellowzers</span>
        <p className="gray-text">
          mijn naam is Eduard, en dit is mijn{" "}
          <span className="white-text">
            <a href="/portfolio">Portfolio</a>
          </span>
        </p>
        <a className="about-see" href="/me">
          Meer info {"->"}{" "}
        </a>
      </div>
    </section>
  );
};
