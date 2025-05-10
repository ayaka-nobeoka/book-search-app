import { useState, useEffect } from "react";

function MyPage() {
  const [name, setName] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const user = localStorage.getItem("username");
    setName(user);

    const saved = localStorage.getItem("books-data"); // ← ① ローカルストレージから文字列を取得
    if (saved) {
      // ← ② 中身があれば
      const parsed = JSON.parse(saved); // ← ③ 文字列をオブジェクトに変換
      const entries = Object.entries(parsed); // ← ④ [[id, book], [id, book], ...] という形に変換
      setBooks(entries); // ← ⑤ その配列を state に入れて更新（→ books に入る）
    }
    // 変数 saved に books-data を入れます。
    // saved に何か入っていたら（nullじゃなかったら）、
    // saved をオブジェクトに変えて parsed に入れます。
    // parsed を Object.entries() で [id, book] の配列に変換し、entries に入れます。
    // 最後に setBooks(entries) で React の状態（books）を更新します。
  }, []);

  return (
    <div>
      <h2>{name}のページ</h2>
      {books.map(([id, book]) => (
        <div key={id}>
          <h2>本のタイトル：{book.title}</h2> {/* → "羅生門" */}
          <img src={book.thumbnail} alt={book.title} />
          <p>{book.read ? "読んだことある本" : "未読"}</p>
          {/* → trueなので"読んだ" */}
          <p>{book.like ? "お気に入りにした" : ""}</p> {/* → trueなので表示 */}
        </div>
      ))}
    </div>
  );
}

export default MyPage;
