import React, { Component } from 'react';

class ResetButton extends Component {
  constructor(props) {

    super(props);

    this.state = {
    };

  }

  render(){
    if (this.props.activateResetButton === 1) {
      return(
          <button onClick={this.props.handleReset}>Reset</button>
      )
    } else{
      return (
        <div></div>
      )
    }
  }
}

export default ResetButton;
