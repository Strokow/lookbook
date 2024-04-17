import React, { useState } from 'react';

function Card({book}) {
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = () => {
        setIsAdded(!isAdded);
    }

    return (
        <div className="card" >
            <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} height={160} width={123} src={`/api/img/${book.pathimg}`} alt={book.name}/>
            <h5>{book.name}, {book.author}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <b>{book.price}€</b>
              </div>
              <button className="button" onClick={handleClick}>
                <img height={25} width={25} src={isAdded ? "/img/doneblack.png" : "/img/greyplus.png"} alt={isAdded ? "Added" : "Add"}/>
              </button>
            </div>
        </div>
    )
}

export default Card;