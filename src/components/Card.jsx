function Card() {
    return (
        <div className="card">
            <img height={150} width={150} src="/img/crime.jpg" alt="Crime and Punishment"/>
            <h5>«Crime and punishment» Fyodor Dostoevsky</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <b>19€</b>
              </div>
              <button className="button">
                <img height={20} width={20} src="/img/greyplus.png" alt="Add"/>
              </button>
            </div>
            
          </div>
    )
}

export default Card
