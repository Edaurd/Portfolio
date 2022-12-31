import React from "react";
import styled from "styled-components";

const ShowColors = () => {
  const [colors, setColors] = React.useState<string[]>([
    "red",
    "green",
    "yellow",
  ]);

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setColors(
      Array.from(e.target.selectedOptions).map((option) => option.value)
    );
  };
  const Colors = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 300px;
  `;

  return (
    <>
      <select multiple name="colors" id="colors" onChange={handleChange}>
        <option value="red" selected>
          red
        </option>
        <option value="green" selected>
          green
        </option>
        <option value="blue">blue</option>
        <option value="yellow" selected>
          yellow
        </option>
        <option value="orange">orange</option>
        <option value="purple">purple</option>
        <option value="black">black</option>
      </select>

      <Colors>
        {colors.map((color) => (
          <div style={{ backgroundColor: color, flex: 1, height: 30 }}></div>
        ))}
      </Colors>
    </>
  );
};

const Drie = () => {
  return (
    <div>
      <ShowColors />
    </div>
  );
};

export default Drie;
