import { useState } from "react";
import "/src/App.css";
import { useBookSearch } from "../hooks/useBookSearch";
import BookCard from "../component/BookCard";
import { Link } from "react-router-dom";

function Search() {
  const [state, setState] = useState("");
  const [query, setQuery] = useState(""); // 確定された検索キーワード
  const result = useBookSearch(query);
  console.log(result.books);
  console.log(result.loading);

  const { books } = useBookSearch(query);
  //   これで books の中には「APIで取得された検索結果の配列」が入ってきます📚

  //   useEffect(() => {
  //     if (!query) return;
  //     fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setBooks(data.items || []);
  //         console.log("検索結果:", data.items);
  //       });
  //   }, [query]);

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
    <div>
      <nav>
        <Link to="/mypage">📚 マイページ</Link>
        <Link to="/login">🔑 ログイン</Link>
      </nav>

      <h2>検索ページ</h2>
      <input
        value={state}
        onChange={(e) => handleState(e)}
        placeholder="Google ブックスから検索"
      />
      <button onClick={handleSearch}>検索</button>
      <p>検索されたキーワード:{query}</p>
      <div class="book-grid">
        {books.map((item) => (
          <BookCard
            key={item.id}
            id={item.id} // ←追加！
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            imageLinks={item.volumeInfo.imageLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;

// ✅ item.volumeInfo.authors?.join(", ") の意味は？
// この部分が少し難しく感じるところですね👇

// item.volumeInfo.authors?.join(", ")
// 仕組みを分解すると：
// 部分	意味
// item.volumeInfo.authors	著者の配列（たとえば ["東野圭吾", "湊かなえ"]）
// ?.	オプショナルチェーン（authors が undefined のときでもエラーにならないようにする）
// .join(", ")	配列を文字列にする（, で区切って）

// 🔍 例：
// authors = ["東野圭吾", "湊かなえ"]
// authors.join(", ")  // → "東野圭吾, 湊かなえ"
// でも、たまに著者情報がない本もあるので…

// item.volumeInfo.authors  // ← undefined のときがある！
// それを防ぐために .authors?.join() のように ? を使って「なかったら無視してね」という安全な書き方にしています。
