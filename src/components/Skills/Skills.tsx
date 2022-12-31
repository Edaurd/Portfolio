import "./Skills.css";
import styled from "styled-components";

interface Skill {
  name: string;
  level: number;
  url: string;
}

const skills: Skill[] = [
  {
    name: "JavaScript",
    level: 70,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "HTML",
    level: 100,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    level: 75,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "React",
    level: 65,
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "C#",
    level: 70,
    url: "https://nodejs.org/en/docs/",
  },
  {
    name: "Python",
    level: 60,
    url: "https://nodejs.org/en/docs/",
  },
];

const SkillBar = styled.div`
  width: 500px;
  height: 20px;
  background: linear-gradient(
    90deg,
    #6c6fff ${(props: { level: number }) => props.level - 5}%,
    #ffffff ${(props: { level: number }) => props.level + 5}%
  );
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const SkillName = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-right: 8px;
  order: -1;
`;

const SkillContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

function Skill({ skill }: { skill: Skill }) {
  return (
    <div
      onClick={() =>
        window.open(`https://google.com/search?q=${skill.name}`, "_blank")
      }
      style={{ cursor: "pointer" }}
    >
      <SkillName>{skill.name}</SkillName>
      <SkillBar level={skill.level} />
    </div>
  );
}

export const Skills = () => {
  return (
    <section id="skills">
      <div className="skill-container">
        <h2>SkillSet</h2>
        <div className="skills">
          <ul>
            {skills.map((skill) => (
              <Skill skill={skill} key={skill.name} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
