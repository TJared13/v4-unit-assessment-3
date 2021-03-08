import React from 'react'

const BookList = (props) => {
    const {addToShelf, books} = props;
    
    const mappedArr = books.map(data => {
        return (
        <div className='booksContain'>
            <ul className='bookItem'>
            <li><img src={data.img} alt='Book Cover' onClick={() => addToShelf(data.title)}/> </li>
            <li><h2>{data.title}</h2></li> 
            <li>{data.author}</li>
            </ul>
        </div>)
    })
    
    return(
        <div  >
        {mappedArr}
        </div>
        )
    }

export default BookList
