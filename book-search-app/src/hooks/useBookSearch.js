import { useState, useEffect } from "react";

export function useBookSearch(query) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!query) return;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.items || []);
        console.log("検索結果:", data.items);
      });
  }, [query]);

  return { books };
}
