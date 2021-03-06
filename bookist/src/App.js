import React, { Component } from 'react'
import Header from './Components/Header';
import BookList from './Components/BookList';
import Shelf from './Components/Shelf';
import SearchBar from './Components/SearchBar';
import data from './data'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      books: data,
      shelf: [],
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  };

  addToShelf = (title) => {
    this.state.shelf.push(title)
  
};
    
  clearShelf(){
    this.setState({myArray: []})
  };

  filterBooks(input){
    let books = this.state.books;
    let filteredBooks = [];

        for(let i = 0; i < books.length; i++){
            if (books[i].includes(input)){
                filteredBooks.push(books[i])
            }
        }
        this.setState({books: filteredBooks})
  };

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} />
        <BookList addToShelf={this.addToShelf} books={this.state.books} />
        {/* <Shelf clearShelf={this.clearShelf} shelf={this.state.shelf} books={this.state.books}/> */}
      </div>
    );
  }
}

export default App;
