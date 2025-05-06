import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrormail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true; //最初はすべて正しい（エラーなし）」という前提を決めている

    if (!name) {
      isValid = false;
      setErrorName("名前を入力してください");
    }
    if (!email.includes("@")) {
      isValid = false;
      setErrormail("メールアドレスを入力してください");
    }
    if (password.length < 6) {
      setErrorPassword("パスワードを入力してください");
      isValid = false;
    }
    // すべてOKの場合
    // ✅ 最後にまとめて判断
    if (!isValid) return;
    console.log("送信データ：", { name, email, password });
  };
  return (
    <div>
      <h2>ログインページ</h2>
      <form onSubmit={handleSubmit}>
        <p>ユーザー名</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        {errorName && <p style={{ color: "red" }}>{errorName}</p>}
        <p>メールアドレス</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        {errorEmail && <p style={{ color: "red" }}>{errorEmail}</p>}
        <p>パスワード</p>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        {errorPassword && <p style={{ color: "red" }}>{errorPassword}</p>}
        <button type="Submit">ログイン</button>
      </form>
    </div>
  );
}

// ✖ setName(e)
//    → name = { target: ..., value: ..., type: ..., ... }

// ✔ setName(e.target.value)
//    → name = "入力された文字"

// ✅ !name の「!」って？
// これは「否定」を意味する演算子（NOT）です。

// !true → false

// !false → true

// !"" → true（空文字は falsy なので、それを否定すると true になる）

// if (!name) は if (name === "" || name === null || name === undefined || name === false)
