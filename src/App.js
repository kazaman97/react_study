import React, { Component } from 'react';

class App extends Component {
  render() {
    // const greeting = "Hi, Jam!"
    // const dom = <h1 className="foo">{greeting}</h1>
    const lbl = <label htmlFor="bar">bar</label>
    const inpt = <input type="text" onChange={() => {console.log("I am Clic ked")}} />
    return (
      <React.Fragment>
        {lbl}{inpt}
      </React.Fragment>
    )
  }
}


export default App;
