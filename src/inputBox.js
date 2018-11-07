import React from "react";
import _ from "lodash";

const Renderinputboxes = props => {
  const boxes = props.boxes;
  const renderBox = boxes.map((item, index) => (
    <input
      key={index}
      style={{ width: `${props.boxWidth}` }}
      className="form-control custom-input-boxes form-control-full"
      id={item.id}
      name={item.id}
      value={item.value}
      maxLength="1"
      onChange={e => props.handleOnChangeInputBoxes(e, item, index)}
    />
  ));
  return renderBox;
};

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { id: "i1", value: "", next: "i2" },
        { id: "i2", value: "", next: "i3" },
        { id: "i3", value: "", next: "i4" },
        { id: "i4", value: "", next: "i5" },
        { id: "i5", value: "", next: "i6" },
        { id: "i6", value: "", next: "i6" }
      ],
      otp: null
    };
    // this.handleOnChangeInputBoxes = this.handleOnChangeInputBoxes.bind(this);
  }

  handleOnChangeInputBoxes (e, item, index)  {
    if (e.target.value === " " || isNaN(e.target.value)) {
    } else {
      const boxesArr = [...this.state.boxes];
      boxesArr[index] = {
        ...boxesArr[index],
        value: e.target.value
      };
      const querySelector = document.getElementById(item.next);
      // console.log("querySelector", querySelector);
      e.target.value !== "" ? querySelector.focus() : null;

      const otp = _.map(boxesArr, "value").join("");
      if (otp.length === 6) {
        this.props.onCompletion(otp);
      }
      this.setState({ boxes: boxesArr, otp: otp });
    }
  };

  render() {
    const { boxes } = this.state;
    return (
      <div>
        <div className="form-group custom-form-otp">
          <Renderinputboxes
            boxes={boxes}
            handleOnChangeInputBoxes={this.handleOnChangeInputBoxes}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

export default InputBox;
