import React from "react";
import { ManipulatorProps } from "../../helpers/interfaces";
// ma wyswietlac 2 buttony, jeden z textContentem "-" i drugi z "+"

const Manipulator: React.FC<ManipulatorProps> = ({ setCount }) => {
  const plusButtonClickHandler = () => {
    console.log("Button + click");
    // setCount(5); // albo podajecie po prostu number, albo funkcję callbackową w której macie dostęp do poprzedniego stanu
    setCount((prevState: number) => prevState + 1);
  };

  return (
    <>
      <button onClick={() => setCount((prevState: number) => prevState - 1)}>
        -
      </button>
      <button onClick={plusButtonClickHandler}>+</button>
    </>
  );
};

export default Manipulator;
