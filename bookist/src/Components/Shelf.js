import React from 'react';

const Shelf = (props) => {
    const {clearShelf, shelf} = props;

    const mappedTitles = shelf.map(data => {
        return (
        <div>
            <div>{data.title}</div> 
        </div>)
    });
    
    return(
        <div className='shelf'>
            <div className='shelfItems'>
                <h3>Your Shelf</h3>
                {mappedTitles}
                <button onclick={clearShelf}>Clear Item</button>
            </div>
        </div>
        
    )
}

    export default Shelf
