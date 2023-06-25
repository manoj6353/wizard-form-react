import { useContext } from "react";
import "./App.css";
import Basic from "./components/Basic";
import Address from "./components/Address";
import Document from "./components/Document";
import Slot from "./components/Slot";
import Payment from "./components/Payment";
import { Step, StepLabel, Stepper } from "@material-ui/core";
import { multiStepContext } from "./StepContext";

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
      <center>
        <Stepper
          style={{ width: "18%" }}
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </center>
      {showStep(currentStep)}
      {/* <Basic />
      <Address />
      <Document />
      <Slot />
      <Payment /> */}
    </>
  );
}

export default App;
