import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import Board from "../screen/Board";
export default function Header() {
  return (
    <>
      <header>
        <header-left>
          <h1>
            <Link to="/">홈</Link>
          </h1>
          <div>
            <Link to="/board">게시판</Link>
            <Link to="/diary">개발일지</Link>
          </div>
        </header-left>
        <header-right>
          <div>
            <Link to="/login">로그인</Link>
          </div>
        </header-right>
      </header>
    </>
  );
}
