import { useContext } from "react";
import "./App.css";
import Basic from "./components/Basic";
import Address from "./components/Address";
import Document from "./components/Document";
import Slot from "./components/Slot";
import Payment from "./components/Payment";
import "bootstrap/dist/css/bootstrap.min.css";
import { multiStepContext } from "./StepContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from "./components/Table";

function App() {
  const { currentStep } = useContext(multiStepContext);

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
      <div className="App">
        <header className="App-header">
          <div className="button">
            <button className="btn btn-success">
              <a href="/">Form</a>
            </button>
            &nbsp;
            <button className="btn btn-success">
              <a href="/get-data">Show</a>
            </button>
          </div>
          <br />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={showStep(currentStep)} />
              <Route path="/get-data" element={<Table />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </>
  );
}

export default App;
