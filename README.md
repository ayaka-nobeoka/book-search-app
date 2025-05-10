# book-search-app

# 📚 書籍検索アプリ

React + Vite で作成した書籍検索アプリです。Google Books API を使って、書籍のタイトルや著者で検索できます。

---

## 🚀 機能一覧

- 🔍 書籍のキーワード検索（Google Books API）
- 📖 書籍の詳細ページ（タイトル・概要・画像）
- ✅ 読んだことのある本にチェック
- 💖 お気に入り登録（localStorage に保存）
- 📝 読書メモ・評価の記録
- 👤 ログイン名の表示（localStorage）
- 🧠 カスタムフックでロジックを分離（useBookSearch など）

---

## 🛠️ 使用技術

- Frontend: [React](https://react.dev/), [Vite](https://vitejs.dev/)
- 状態管理: React Hooks (`useState`, `useEffect`)
- データ取得: `fetch()`（Google Books API）
- 保存: `localStorage`

---

## 📦 セットアップ方法

```bash
git clone https://github.com/yourname/book-search-app.git
cd book-search-app
npm install
npm run dev
```
