import React from "react";
import ReactDOM from "react-dom";
import OtpInputBox from "./inputBox.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onCompletion = this.onCompletion.bind(this);
  }

  onCompletion(otp) {
    console.log("final otp", otp);
  }

  render() {
    return (
      <div>
        <OtpInputBox boxWidth="5%" onCompletion={this.onCompletion} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default OtpInputBox;