import { useState, useEffect } from "react";

function MyPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ← 仮の状態
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

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  return (
    <>
      <div className="mypage-container">
        {isLoggedIn ? (
          <div>
            <h2>マイページ</h2>
            {name === "ゲスト" ? (
              <p>
                ログインしていません。<a href="/login">ログインする</a>
              </p>
            ) : (
              <p>ようこそ、{name}さん！📚</p>
            )}
            {books.map(([id, book]) => (
              <div key={id}>
                <h2>本のタイトル：{book.title}</h2> {/* → "羅生門" */}
                <img src={book.thumbnail} alt={book.title} />
                <p>{book.read ? "読んだことある本" : "未読"}</p>
                {/* → trueなので"読んだ" */}
                <p>{book.like ? "お気に入りにした" : ""}</p>{" "}
                {/* → trueなので表示 */}
              </div>
            ))}
          </div>
        ) : (
          <div className="not-logged-in">
            <p>ログインしていません。</p>
            <p>
              <a href="/login">こちらからログイン</a>してください。
            </p>
          </div>
        )}
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("username");
          window.location.href = "/login"; // ← 遷移
        }}
      >
        ログアウト
      </button>
    </>
  );
}

export default MyPage;
