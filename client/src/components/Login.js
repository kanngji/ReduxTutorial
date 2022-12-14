import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container_login">
        <form className="signup">
          <h1>Login</h1>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
          <button>로그인</button>
          <button>
            <Link to="/signup">회원가입</Link>
          </button>
        </form>
      </div>
    </>
  );
}
