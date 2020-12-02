import React, {Component} from 'react';

class Car extends Component{
    constructor(props) {
        super(props);
        this.state = {
          brand : "BMW",
          model : "M4",
          colour: "Blue",
          year : 2020
      }
    }

    render() {
        return (
            <>
              <h1>My car is a beaut. </h1>
              <h4>These are her features:</h4>
              <p>{this.state.brand},{this.state.model}</p>
              <p>{this.state.colour}</p>
              <p>{this.state.year}</p>
          </>
        );
    }
}