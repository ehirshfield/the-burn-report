import React, { Component } from 'react';

class ParsedData extends Component {
  constructor(props) {

    super(props);

    this.state = {
      parsedData: {}
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
    return(
      <div>
        {this.props.parsedData.map(function(points, i){
          return(
            <div key={i}>
              {points}
            </div>
          )
        })}
      </div>
    )
  }
}

export default ParsedData;
