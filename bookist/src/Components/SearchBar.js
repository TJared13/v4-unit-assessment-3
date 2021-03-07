import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
        }
    };

    handleChange(val){ 
        this.setState({userInput: val})
    };

    handleClick(){
        // return filteredBooks;
    };

    
    render(){
        console.log(this.state.userInput)
        return (
            <div className='search'>
                <input type='text' onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={this.handleClick()}>Search</button>
                <button>Clear Search</button>
            </div>
        )
    }
}
