# 📚 書籍検索アプリ（React + Vite）

Google Books API を使って、本の検索・表示ができる React アプリを作成します。

---

## ✅ 実装予定の機能（ToDo）

- [x] React + Vite プロジェクト作成
- [ ] 書籍検索フォームの作成
- [ ] 検索リクエスト（Google Books API へ）
- [ ] 書籍リストの表示（画像・タイトル・著者名）
- [ ] 書籍クリックで詳細ページに遷移（React Router）
- [ ] エラー・ローディング状態の処理
- [ ] スタイリング（CSS または Tailwind）

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
│ ├── Home.jsx
│ └── BookDetail.jsx
├── hooks/
│ └── useBooks.js
├── App.jsx
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
