import React, { Component } from 'react';

class Parser extends Component {

  constructor(props) {

    super(props);

    this.state = {
      rawData: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var dataToBeParsed = this.state.rawData;
    var regex = '//gi';
    var result = dataToBeParsed.match(regex);
    console.log(result);
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
      <form>
        <textarea type="text" value={this.state.rawData} name="rawData" placeholder="Put raw text here to parse" onChange={this.handleInputChange} />
        <button id="parseButton" type="submit" onClick={this.handleSubmit}>PARSE IT GOOD</button>
      </form>
    )
  }
}

export default Parser;
