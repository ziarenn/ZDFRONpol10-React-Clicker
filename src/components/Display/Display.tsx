import React from "react";
import { DisplayProps } from "../../helpers/interfaces";


const Display: React.FC<DisplayProps> = ({ numberToDisplay }) => {
  const generateRandomNumber = () => {
    return Math.random();
  };

  return (
    <>
      <p>Random number: {generateRandomNumber()}</p>
      <p>{numberToDisplay}</p>
    </>
  );
};
export default Display;
