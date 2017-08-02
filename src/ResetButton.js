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
        <button>Reset</button>
      )
    }
    return(
      <div></div>
    )
  }

}

export default ResetButton;
