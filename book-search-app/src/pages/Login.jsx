import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //フォームの入力状態・送信・エラーなどを まとめて管理するための道具箱👆

  const onSubmit = (data) => {
    // バリデーションに成功したときだけ呼ばれる！
    console.log("送信データ:", data);
    localStorage.setItem("username", data.name); // ← 誰がログインしているか
    localStorage.setItem("isLoggedIn", "true"); // ← ログインしている状態かどうか
    navigate("/mypage"); // ← これもここでOK！
  };

  return (
    <div>
      <h2>ログインページ</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>ユーザー名</p>
        <input {...register("name", { required: "名前は必須です" })} />
        {errors.name && (
          <p style={{ color: "red", fontSize: "10px" }}>
            {errors.name.message}
          </p>
        )}
        <p>メールアドレス</p>
        <input
          type="email"
          {...register("email", {
            required: "メールアドレスは必須です",
            pattern: { value: /@/, message: "@が含まれていません" },
          })}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "10px" }}>
            {errors.email.message}
          </p>
        )}
        <p>パスワード</p>
        <input
          type="password"
          {...register("password", {
            required: "パスワードを入力してください",
            minLength: { value: 6, message: "6文字以上で入力してね" },
          })}
        />
        {errors.password && (
          <p style={{ color: "red", fontSize: "10px" }}>
            {errors.password.message}
          </p>
        )}
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

{
  /* <form onSubmit={handleSubmit(onSubmit)}></form>
バリデーションを通ったら onSubmit を呼んでね！ */
}

// register() にルールを書いているのね！
// {...register("email", {...バリデーションルール})}
// これは：

// 📌 register() という関数が返してくれる**input要素に必要な設定（オブジェクト）**を、
// 📌 スプレッド構文 {...} で input に「展開」して渡している、という意味です！

// {errors.name && <p>{errors.name.message}</p>}
// はこういう意味👇
// errors.name が存在すれば（＝エラーがあるなら）
// <p>タグで errors.name.message を表示する！

//react-hook-form"で省略されたもの
// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [errorName, setErrorName] = useState("");
// const [errorEmail, setErrormail] = useState("");
// const [errorPassword, setErrorPassword] = useState("");

// const handleSubmit = (e) => {
//   e.preventDefault();

//   let isValid = true; //最初はすべて正しい（エラーなし）」という前提を決めている

//   if (!name) {
//     isValid = false;
//     setErrorName("名前を入力してください");
//   }
//   if (!email.includes("@")) {
//     isValid = false;
//     setErrormail("メールアドレスを入力してください");
//   }
//   if (password.length < 6) {
//     setErrorPassword("パスワードを入力してください");
//     isValid = false;
//   }
//   // すべてOKの場合
//   // ✅ 最後にまとめて判断
//   if (!isValid) return;
//   console.log("送信データ：", { name, email, password });
//   localStorage.setItem("username", name);
//   navigate("/mypage"); // ← これでマイページに移動！！
// };

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
