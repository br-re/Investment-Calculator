import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

const INITAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(INITAL_VALUES);

  const inputIsValid = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onHandleChange={handleChange} />
      {inputIsValid ? (
        <Result userInput={userInput} />
      ) : (
        <p className="center">Duration must be one or higher!</p>
      )}
    </>
  );
}

export default App;
