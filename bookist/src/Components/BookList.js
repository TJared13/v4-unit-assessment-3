import React from 'react'

const BookList = (props) => {
    const {addToShelf, books} = props;
    
    const mappedArr = books.map(data => {
        return (
        <div>
        <div>{data.title}</div> 
        <div>{data.author}</div>
        <img src={data.img} alt='Book Cover' onClick={addToShelf(data.title)}/> 
        </div>)
    })
    
    return(
        <div>
        {mappedArr}
        </div>
        )
    }

export default BookList
