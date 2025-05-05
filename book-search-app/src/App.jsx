import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import BookDetail from "./pages/BookDetail";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
