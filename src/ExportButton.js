import React, { Component } from 'react';

class ExportButton extends Component {
  constructor(props) {

    super(props);

    this.state = {

    };

  }

  render(){
    if (this.props.activateExportButton === 1) {
      return(
        <button>Export</button>
      )
    }
    return(
      <div></div>
    )
  }

}

export default ExportButton;
