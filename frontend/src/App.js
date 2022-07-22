import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookDetails from "./pages/BookDetails";
import ErrorPage from "./pages/ErrorPage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import MyBooks from "./pages/MyBooks";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/my-books/:id" element={<BookDetails />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
