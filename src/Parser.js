import React, { Component } from 'react';
import './Parser.css';
import ParsedData from './ParsedData.js';

class Parser extends Component {

  constructor(props) {

    super(props);

    this.state = {
      rawData: "",
      parsedData: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.rawData === "") {
      this.setState({
        parsedData: "blankState"
      });
    }
    else {
      let dataToBeParsed = this.state.rawData;
      let regex = /([0-9]*\.?[0-9]+)\s?(point)?\s?(points)?\s?(pt)?\s?(pts)?\s?(on)?\s?(for)?\s?(of review on)?\s?(of)?\s?(pt on)?\s?(points on)?\s(review)?\s?(FQ-?)?([0-9]{4,5})\s?(review)?/gi;
      let result = dataToBeParsed.match(regex);
      console.log(result);
      this.setState({
        parsedData: result
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <div>
        <form>
          <textarea id="inputArea" type="text" value={this.state.rawData} name="rawData" placeholder="Put raw text here to parse" onChange={this.handleInputChange} />
          <button id="parseButton" type="submit" onClick={this.handleSubmit}>PARSE IT GOOD</button>
        </form>
        <div>
          <ParsedData parsedData={this.state.parsedData} />
        </div>
      </div>



    );
  }
}

export default Parser;
