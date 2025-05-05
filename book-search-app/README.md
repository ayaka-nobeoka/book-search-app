# 📚 書籍検索アプリ（React + Vite）

Google Books API を使って、本の検索・表示ができる React アプリを作成します。

---

## ✅ 実装予定の機能（ToDo）

- [x] React + Vite プロジェクト作成
- [x] 書籍検索フォームの作成
- [x] 検索リクエスト（Google Books API へ）
- [x] 書籍リストの表示（画像・タイトル・著者名）
- [x] 書籍クリックで詳細ページに遷移（React Router）
- [x] エラー・ローディング状態の処理
- [ ] スタイリング（CSS または Tailwind）

# 📌 React 中級ステップアップロードマップ

## ① フォーム入力とバリデーション編（実務でも必須！）

- [ ] `/login` ページを作成（React Router でルーティング）
- [ ] フォーム作成（名前・メール・パスワード）
- [ ] useState でフォームの状態を管理
- [ ] onChange で入力を受け取り、状態に反映
- [ ] onSubmit イベントで入力内容を `console.log()` に出力
- [ ] バリデーション追加
  - [ ] 空欄チェック（必須）
  - [ ] メール形式（`@` 含むなど）
  - [ ] パスワード文字数チェック（例：6 文字以上）
- [ ] エラー表示（赤文字などでフィードバック）
- [ ] バリデーション処理を関数で分離（再利用可能にする）
- [ ] `react-hook-form` を導入して同じことをもっと簡潔に実装

---

## ② カスタムフックと props 設計の整理編（再利用性・可読性 UP）

- [ ] Login フォームを小コンポーネントに分割（InputField など）
- [ ] props で値とイベントをやり取り（練習！）
- [ ] フォームの状態・ロジックを `useLoginForm` カスタムフックに切り出し
- [ ] 書籍アプリの検索ロジックも `useSearchBooks` に切り出してみる
- [ ] `useContext` で「ログイン状態」や「検索条件」などの共通情報をアプリ全体で管理
- [ ] Context と props の違い・使い分けを学ぶ

---

## 💡 余裕があれば：ミニプロジェクトで応用

- [ ] 「お問い合わせフォーム」や「ユーザー登録フォーム」を作ってみる
- [ ] 書籍を「お気に入り登録」してローカルストレージに保存
- [ ] お気に入りリストを別ページで表示する

---

## 🔧 使用技術

| 技術           | 内容                         |
| -------------- | ---------------------------- |
| フレームワーク | React + Vite                 |
| API            | Google Books API             |
| 状態管理       | useState / useEffect         |
| 画面遷移       | React Router                 |
| スタイリング   | CSS（もしくは Tailwind CSS） |

---

## 🔗 API 仕様（Google Books API）

**エンドポイント例：**

https://www.googleapis.com/books/v1/volumes?q=検索キーワード

例）  
`https://www.googleapis.com/books/v1/volumes?q=harry+potter`

---

## 📁 ディレクトリ構成（予定）

src/
├── components/
│ ├── SearchForm.jsx
│ └── BookList.jsx
├── pages/
│ ├── Search.jsx ← 検索ページ
│ └── BookDetail.jsx ← 書籍の詳細ページ
├── hooks/
│ └── useBooks.js
├── App.jsx ← ルーティング設定（入口）
└── main.jsx

---

## 🛠 セットアップ方法

```bash
# クローン
git clone https://github.com/あなたのユーザー名/book-search-app.git
cd book-search-app

# パッケージインストール
npm install

# 開発サーバー起動
npm run dev
🎯 今後やりたい拡張機能（任意）
ページネーション対応

検索履歴の保存

ローカルストレージによるお気に入り機能

詳細ページの改善（出版日・説明など）
```
