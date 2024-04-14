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
      <SearchField />
      {/*<div className="search-container">
        <input className="input-search" type="text" />{" "}
         стилистики класса input-search находится в файле index.scss на строках 118-129 
        <img
          className="search-icon"
          height={20}
          width={20}
          src="/img/search.png"
          alt="Search"
        />{" "}
         стилистики класса input-icon (лупа в строке поиска) находится в файле index.scss на строках 131-136 
      </div>*/}
      <h1 className="mb-40">Our book range</h1>
      <div className="d-flex flex-wrap justify-between">
        {isLoading ? Array(21).fill(<MyLoader />) : books.map((book) => (
          <div style={{ marginBottom: "30px" }}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
