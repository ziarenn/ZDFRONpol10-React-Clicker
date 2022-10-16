import React from "react";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";

function App() {
  const propToPassDown = 5;

  return (
    <div className="App">
      <Display numberToDisplay={propToPassDown}/>
      <Manipulator />
    </div>
  );
}

// {
//   numberToDisplay: propToPassDown,
// }

// <Display x={y}/> -> Display({x: y})

export default App;
