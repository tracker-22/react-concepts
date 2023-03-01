import React from 'react';
import Life_cycle from './life_cycle';
import './App.css';


class App extends React.Component {
  state = { display: true };
  delete = () => {
    this.setState({ display: false });
  };
 
  render() {
    let comp;
    if (this.state.display) {
      comp = <Life_cycle name="ajith" />;
    }
    return (
      <div className='App'>
        {comp}
        <br/>
        <br/>
        <button onClick={this.delete}>
          Delete the component
        </button>
      </div>
    );
  }
}
 
export default App;
