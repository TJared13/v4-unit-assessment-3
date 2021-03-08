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
    // this.addToShelf = this.addToShelf.bind(this)
    // this.clearShelf = this.clearShelf.bind(this)
    // this.filterBooks = this.filterBooks.bind(this)
  };

  addToShelf = (title, i) => {
    this.setState({shelf: [...this.state.shelf, title]})
    let shelfedBooks = this.state.books.slice();
    shelfedBooks.splice(i, 1)
    this.setState({books: shelfedBooks})
};
    
  clearShelf = () => {
    this.setState({shelf: []});
    this.setState({books: data})
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books.filter((elem) => {
      if (elem.title.toLowerCase().includes(input) || elem.author.toLowerCase().includes(input))
      return elem
    })
    this.setState({books: filteredBooks})
  };

  clearSearch = () => this.setState({books: data})

  render(){
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} clearSearch={this.clearSearch} />
        <div className='mainContain'>
        <BookList addToShelf={this.addToShelf} books={this.state.books} />
        <Shelf clearShelf={this.clearShelf} shelf={this.state.shelf} books={this.state.books}/>
        </div>
      </div>
    );
  }
}

export default App;
