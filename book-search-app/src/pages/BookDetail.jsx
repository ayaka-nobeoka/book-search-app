import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams(); // ← URLからIDを取得
  console.log(id);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(null); // ← ローディング状態
  const [error, setError] = useState(null); // ← エラー状態

  // 🧠 なぜ null を使うの？
  // useState({}) にすると、最初からオブジェクトがあると見なされてしまう

  // null にしておくことで、「まだ何もない」状態を明確に表現できる

  useEffect(() => {
    setLoading(true); // ローディング開始
    setError(null); // エラー初期化

    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("通信エラー"); // 👈 ここで通信失敗を検知
        return res.json(); // うまくいってるときだけ json に変換
      })
      .then((data) => {
        setBook(data); // ← ここで1冊の本のデータが入る
        console.log(data);
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false); // ローディング終了
      });
  }, [id]);

  return (
    <>
      <h2>📘 書籍の詳細ページ</h2>

      {loading && <p>読み込み中...</p>}
      {error && <p>エラーが発生しました: {error}</p>}
      {book && (
        <div>
          <h2>{book.volumeInfo.title}</h2>
          <img src={book.volumeInfo.imageLinks?.thumbnail} />
          <p>{book.volumeInfo.description}</p>
        </div>
      )}
    </>
  );
}

// 🔄 状態の流れまとめ
// URLパラメータ（例：/book/abc123）から id を取得 → useParams()

// useEffect() でその id を使って API リクエストを送る

// setBook(data) で取得したデータを保存

// book.volumeInfo.title などで表示

// 🔍 三項演算子の形： 条件 ? 条件がtrueのとき : 条件がfalseのとき
