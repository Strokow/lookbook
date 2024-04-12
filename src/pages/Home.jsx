import Card from "../components/Card";
function Home({ books }) {
  return (
    <div className="content p-40">
      <div className="search-container">
        <input className="input-search" type="text" />{" "}
        {/* стилистики класса input-search находится в файле index.scss на строках 118-129 */}
        <img
          className="search-icon"
          height={20}
          width={20}
          src="/img/search.png"
          alt="Search"
        />{" "}
        {/* стилистики класса input-icon (лупа в строке поиска) находится в файле index.scss на строках 131-136 */}
      </div>
      <h1 className="mb-40">Our book range</h1>
      <div className="d-flex flex-wrap justify-between">
        {books.map((book) => (
          <div style={{ marginBottom: "30px" }}>
            <Card book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
