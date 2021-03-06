import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
        }
    };

    handleChange(val){ 
        this.setState({userInput: val})
    }

    
    render(){
        console.log(this.state.userInput)
        return (
            <div>
                <input type='text' onChange={(e) => this.handleChange(e.target.value)} />
                <button>Search</button>
                <button>Clear Search</button>
            </div>
        )
    }
}
