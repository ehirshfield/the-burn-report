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
        <button onClick={this.props.exportExcel}>Export</button>
      )
    }
    return(
      <div></div>
    )
  }

}

export default ExportButton;
