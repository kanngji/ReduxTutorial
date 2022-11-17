import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Board from "./screen/Board";
import Diary from "./screen/Diary";
import Main from "./screen/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/diary" element={<Diary />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
