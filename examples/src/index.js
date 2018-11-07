import React from 'react';
import {render} from 'react-dom';
import OtpInputBox from '../../src/inputBox';

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

render(
  <App/>, document.getElementById("root"));