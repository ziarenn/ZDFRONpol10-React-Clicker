import React from "react";

// ma wyswietlac 2 buttony, jeden z textContentem "-" i drugi z "+"

const Manipulator = () => {
  const plusButtonClickHandler = () => {
    console.log("Button + click");
  };

  return (
    <>
      <button onClick={() => console.log("Button - click")}>-</button>
      <button onClick={plusButtonClickHandler}>+</button>
    </>
  );
};

export default Manipulator;
