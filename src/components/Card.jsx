import React from 'react';
function Card({book}) {
    return (
        <div className="card" key={'book'+ book.id}>
            <img height={160} width={160} src={`/api/img/${book.pathimg}`} alt={book.name}/>
            <h5>{book.name}, {book.author}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <b>{book.price}€</b>
              </div>
              <button className="button">
                <img height={20} width={20} src="/img/greyplus.png" alt="Add"/>
              </button>
            </div>
        </div>
    )
}


export default Card