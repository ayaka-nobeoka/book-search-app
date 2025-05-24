import { useNavigate } from "react-router-dom";

function BookCard({ id, title, authors, imageLinks }) {
  const thumbnail = imageLinks?.thumbnail;
  const navigate = useNavigate(); // ←ここでReact Routerから取得！
  const handleClick = () => {
    navigate(`/book/${id}`); // ←ここで使う
  };
  return (
    <div className="book-card">
      <div onClick={handleClick}>
        <h3>{title}</h3>
        <p>{authors?.join(", ")}</p>
        <img src={thumbnail} alt={title} />
      </div>
    </div>
  );
}

export default BookCard;
