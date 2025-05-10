import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams(); // ← URLからIDを取得
  console.log(id);

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(null); // ← ローディング状態
  const [error, setError] = useState(null); // ← エラー状態

  // 読書メモと評価の state
  const [memo, setMemo] = useState();
  const [review, setReview] = useState(0);
  const [read, setRead] = useState(false);
  const [like, setLike] = useState(false);

  // 🧠 なぜ null を使うの？
  // useState({}) にすると、最初からオブジェクトがあると見なされてしまう

  // null にしておくことで、「まだ何もない」状態を明確に表現できる

  useEffect(() => {
    setLoading(true); // ローディング開始
    setError(null); // エラー初期化

    // 書籍データ取得
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

  // localStorage から読み込む
  useEffect(() => {
    const saved = localStorage.getItem(`memo-${id}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setMemo(parsed.memo);
      setReview(parsed.review);
      setRead(parsed.read ?? false); // ← 未定義だったら false に
      setLike(parsed.like ?? false);
    }
  }, [id]);

  // 保存処理
  const handleSave = () => {
    const data = {
      memo, // ← memo: memo の省略形
      review, // ← review: review の省略形
      read, // ← read: read の省略形
      like,
      title: book.volumeInfo.title,
      thumbnail: book.volumeInfo.imageLinks?.thumbnail,
    };
    const allData = JSON.parse(localStorage.getItem("books-data") || "{}");
    // ↑ books-data がまだなければ空のオブジェクトから始める
    allData[id] = data; //allData というオブジェクトに、id をキーとして data を保存する
    //idごとに1冊ずつ保存された本の情報を、まとめて保管しているオブジェクトを作っている
    // ↑ 検索やクリックなどで得た id をキーにしてデータを保存・上書き
    localStorage.setItem("books-data", JSON.stringify(allData));
    // ↑ 保存された全データを localStorage に戻す（上書き保存）
    alert("保存しました！");
  };

  // 📦 全データを取り出して（parsed）
  // 🎯 編集したい1冊だけを書き換えて（parsed[id] = newData）
  // 💾 全体を上書き保存して戻す（setItem）

  return (
    <>
      <h2>📘 書籍の詳細ページ</h2>

      {loading && <p>読み込み中...</p>}
      {error && <p>エラーが発生しました: {error}</p>}
      {book && (
        <div>
          <h2>
            {book.volumeInfo.title}{" "}
            <label>
              <input
                type="checkbox"
                checked={like}
                onChange={(e) => setLike(e.target.checked)}
              />
              お気に入り
            </label>
          </h2>

          <img src={book.volumeInfo.imageLinks?.thumbnail} />
          <p>{book.volumeInfo.description}</p>
          <label>
            <input
              type="checkbox"
              checked={read}
              onChange={(e) => setRead(e.target.checked)}
            />
            📖 読んだことがある
          </label>
          <h3>📚 読書メモ</h3>
          <textarea value={memo} onChange={(e) => setMemo(e.target.value)} />
          <h3>💡 面白かった度（1〜5）</h3>
          <input
            type="number"
            min="1"
            max="5"
            value={review}
            onChange={(e) => setReview(Number(e.target.value))}
          />
          <br />
          <button onClick={handleSave}>保存する</button>
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
