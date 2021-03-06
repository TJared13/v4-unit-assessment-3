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
        <div>
            {mappedTitles}
            <button onclick={clearShelf}>Clear DataTransferItemList</button>
        </div>
        
    )
}

    export default Shelf
