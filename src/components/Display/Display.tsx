// rafce
import React from "react";
import { DisplayProps } from "../../helpers/interfaces";
const Display = (props: DisplayProps) => {
  const generateRandomNumber = () => {
    return Math.random();
  };

  console.log(props.numberToDisplay);

  return (
    <>
      <p>Random number: {generateRandomNumber()}</p>
      <p>{props.numberToDisplay}</p>
    </>
  );
};
// return <p>0</p> -> ReactDOM.render(<p>0</p>)
// <> === <React.Fragment>
export default Display;
