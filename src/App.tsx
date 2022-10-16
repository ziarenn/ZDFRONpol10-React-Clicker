import React from "react";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";

function App() {
  const propToPassDown = 5;

  // stan odpowiadajacy za informowanie aplikacji o tym czy fetch zakonczyl dzialanie i dane sa gotowe do wyswietlenia

  return (
    <div className="App">
      <Display numberToDisplay={propToPassDown} />
      <Manipulator />
    </div>
  );
}

export default App;
