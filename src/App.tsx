import { useState } from "react";
import Display from "./components/Display/Display";
import Manipulator from "./components/Manipulator/Manipulator";

// useX - jakis hook

function App() {
  // HOOKI TYLKO NA TOP SCOPE W KOMPONENTACH FUNKCYJNYCH
  const [count, setCount] = useState(0);

  // const lista = [1, 2, 3, 4, 5];
  // const [a, b, c, d, e] = lista;
  // console.log(a, b, c, d, e); // OUTPUT: 1 2 3 4 5
  // COUNT TO ZMIENNA STANOWA, PUDEŁKO NA DANE
  // SETCOUNT TO DEDYKOWANA DLA COUNT FUNKCJA, KTOREJ JEDYNYM ZADANIEM JEST ZMIANA WARTOSCI ZMIENNEJ COUNT

  // const useState = (initialValue) => {
  //   let state = initialValue;

  //   const setState = (value) => {
  //     state = value;
  //   };

  //   return [state, setState];
  // };

  return (
    <div className="App">
      <Display numberToDisplay={count} />
      <Manipulator setCount={setCount} />
    </div>
  );
}

export default App;
