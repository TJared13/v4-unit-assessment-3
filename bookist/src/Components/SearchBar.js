import React, { Component } from 'react'

export default class SearchBar extends Component {
    // const {filteredBooks, clearSearch} = props;

    constructor(){
        super();
        this.state = {
            userInput: '',
        }
    };

    handleChange = (val) => { 
        this.setState({userInput: val})
    };

    handleClick = () => {
        this.props.filterBooks(this.state.userInput)
    };

    handleClear = () => {
        this.setState({userInput: ''})
        this.props.clearSearch();
    }

    
    render(){
        console.log(this.state.userInput)
        return (
            <div className='search'>
                <input type='text' onChange={(e) => this.handleChange(e.target.value)} />
                <button onClick={() => this.handleClick()}>Search</button>
                <button onClick={() => this.handleClear()}>Clear Search</button>
            </div>
        )
    }
}
