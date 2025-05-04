import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("");
  const [query, setQuery] = useState(""); // 確定された検索キーワード
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items || []);
        console.log("検索結果:", data.items);
      });
  }, [query]);

  // 💡まとめると：
  // 検索キーワード query が変わるたびに
  // https://www.googleapis.com/... にリクエストを送り
  // 結果を console.log() で出力

  const handleState = (e) => {
    setState(e.target.value);
  };

  const handleSearch = () => {
    setQuery(state);
    console.log("検索されたキーワード:", state);
    setState("");
  };

  return (
    <>
      <input value={state} onChange={(e) => handleState(e)} />
      <button onClick={handleSearch}>検索</button>
      <p>検索されたキーワード:{query}</p>

      {books.map((item) => (
        <div key={item.id}>
          <h3>{item.volumeInfo.title}</h3>
          <p>{item.volumeInfo.authors?.join(", ")}</p>
          <img src={item.volumeInfo.imageLinks?.thumbnail} />
        </div>
      ))}
    </>
  );
}

export default App;
