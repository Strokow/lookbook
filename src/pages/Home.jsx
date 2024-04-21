import React, { useState, useEffect } from "react";
import MyLoader from "../components/MyLoader";
import Card from "../components/Card";
import SearchField from "../components/SearchField";


function Home() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    fetch("/api/books/active")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="content p-40">
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', width: '100%', padding: '0 40px', paddingTop: '50px', paddingBottom: '50px' }}>
        <img className="library" src="/img/library.png" alt="Library pattern" />
        <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%' }}>
            <SearchField />
        </div>
    </div>


      <h1 className="mb-40">Our book range</h1>
      <div className="d-flex flex-wrap justify-between">
        {books.map((book) => (
          <div style={{ marginBottom: "30px" }} key={book.id}>
            {isLoading ? <MyLoader /> : <Card book={book} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;