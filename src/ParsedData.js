import React, { Component } from 'react';
import ExportButton from './ExportButton.js';
import ResetButton from './ResetButton.js';

class ParsedData extends Component {
  constructor(props) {

    super(props);

    this.state = {

    };

  }

  render(){
    if (this.props.parsedData === "blankState"){
      return(
        <div>
          Nothing to see here...
        </div>
      )
    }
    else if (this.props.parsedData === null) {
      return (
        <div>
          Nothing could be found to parse!
        </div>
      )
    }
    else {
      return(
        <div>
          <div>
            {this.props.parsedData.map(function(points, i){
              return(
                <div key={i}>
                  {points}
                </div>
              )
            })}
          </div>
          <div>
            <ExportButton activateExportButton={this.props.activateExportButton}
              exportExcel={this.props.exportExcel}
               />
          </div>
          <div>
            <ResetButton handleReset={this.props.handleReset}
              activateResetButton={this.props.activateResetButton}
              />
          </div>
        </div>
      )
    }
  }
}

export default ParsedData;
