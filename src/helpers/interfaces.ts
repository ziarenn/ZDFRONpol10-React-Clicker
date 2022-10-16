export interface DisplayProps {
  numberToDisplay: number;
}

// setCount to funkcja która przyjmuje number i nic nie zwraca
export interface ManipulatorProps {
  setCount: (value: number | ((prevState: number) => number)) => void;
}
