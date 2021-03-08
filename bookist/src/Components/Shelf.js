import React from 'react';

const Shelf = (props) => {
    const {clearShelf, shelf} = props;

    const mappedTitles = shelf.map(data => {
        return (
        <div>
            <div>{data}</div> 
        </div>)
    });
    
    return(
        <div className='shelf'>
            <div className='shelfItems'>
                <h3>Your Shelf</h3>
                {mappedTitles}
                <button onClick={() => clearShelf()}>Clear Item</button>
            </div>
        </div>
        
    )
}

    export default Shelf
