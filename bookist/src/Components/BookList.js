import React from 'react'

const BookList = (props) => {
    const {books} = props;
    console.log(books)
    const mappedArr = books.map(data => {
        return (
        <div>
        <div>{data.title}</div> 
        <div>{data.author}</div>
        <img src={data.img} /> 
        </div>)
    })
    
    console.log(mappedArr)
    return(
        <div>
        {mappedArr}
        </div>



        )
    }

export default BookList
