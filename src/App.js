import { useContext } from "react";
import "./App.css";
import Basic from "./components/Basic";
import Address from "./components/Address";
import Document from "./components/Document";
import Slot from "./components/Slot";
import Payment from "./components/Payment";
import { multiStepContext } from "./StepContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { currentStep, finalData } = useContext(multiStepContext);

  function showStep(step) {
    switch (step) {
      case 1:
        return <Basic />;
      case 2:
        return <Address />;
      case 3:
        return <Document />;
      case 4:
        return <Slot />;
      case 5:
        return <Payment />;
      default:
        return "Thank you";
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={showStep(currentStep)} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
