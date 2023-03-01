import React, { Component } from 'react'
import Increment from './increment';
import Decrement from './decrement';

class Life_cycle extends Component {

    constructor(props) {
        console.log('constructor Triggers');
        super(props);
        this.state = {
            count: 0,
            color: '#50929f',
            one:'green',
            name: this.props.name
        }
    }

    componentDidMount() {
        console.log('name', this.state.name);
        this.setState({count: 1});
    }

    handleChange = (type) => {
        if(type === 'increment') {
            this.setState((prevState) => ({
                count: prevState.count + 1
            })); 
        }
        if(type === 'decrement') {
            this.setState((prevState) => ({
                count: prevState.count - 1
            })); 
        }
       
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate Triggers');
    }

    componentWillUnmount() { 
        console.log("componentWillUnmount Triggers"); 
    } 

    ChangeColor = (e) => {
        this.setState({color: e.target.value});
    }

    render() {
        console.log('render Triggers');
        return (
            <>
                <Decrement handleChange={this.handleChange}/>
                <span style={{fontSize: '30px', fontWeight: '600', margin: '20px'}}>{this.state.count}</span>
                <Increment handleChange={this.handleChange}/>
                
                {/* <div className='color-div' style={{backgroundColor: this.state.color}} >
                </div>
                <input type="color" id="favcolor" value={this.state.color} name="favcolor" onChange={(e) => this.ChangeColor(e)} /> */}
            </>
            
        )
    }
}

export default Life_cycle