import React from 'react';
import Typography from '@material-ui/core/Typography';

const Pip = ({ isOn }) =>
  <div className={`pip ${isOn && 'pip--on'}`}></div>

const BinaryDigit = ({ base2NumberAsArray }) =>
  <div className="binary-digit">
    {
      base2NumberAsArray.map((pip, idx) => <Pip key={idx} isOn={pip === 1} />)
    }
  </div>

const BinaryDigitGroup = ({ group }) => {
  let pair = numberAsBinaryArrayPair(group);
  return (<div>
    <div className="binary-digit-group">
      {
        pair.map((binaryDigit, idx) => <BinaryDigit base2NumberAsArray={binaryDigit} key={idx} />)
      }
    </div>
    {/* <Typography component="h5" variant="h5" align="center" gutterBottom>
      <b>{group.toString().padStart(2, '0')} </b>
    </Typography> */}
  </div>)
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    }
  }

  componentDidMount() {
    setInterval(function () {
      const date = new Date();
      let newNumbers = [date.getHours(), date.getMinutes(), date.getSeconds()]
      this.setState({
        numbers: newNumbers
      });
    }.bind(this), 1000);
  }

  render() {
    return (
      <div className="app" style={{ justifyContent: 'center', display: 'flex' }}>
        <div className="clock">
          {
            this.state.numbers.map(digit => <BinaryDigitGroup group={digit} />)
          }
        </div>
      </div>
    );
  }
}




function numberToBinary(base10Number) {
  const base2Values = [8, 4, 2, 1];
  let output = [0, 0, 0, 0];
  let remainder = base10Number;

  base2Values.forEach((val, idx) => {
    const left = remainder - val;

    if (left >= 0) {
      output[idx] = 1;
      remainder = left
    }
  });

  return output;
}

function numberAsBinaryArrayPair(number) {
  const pair = [];
  if (number < 10) {
    pair[0] = numberToBinary();
    pair[1] = numberToBinary(number);
  } else {
    const numberAsArray = String(number).split('');
    pair[0] = numberToBinary(parseInt(numberAsArray[0], 10));
    pair[1] = numberToBinary(parseInt(numberAsArray[1], 10));
  }

  return pair;
}

export default Clock;