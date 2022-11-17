import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container_signup">
        <form className="signup">
          <h1>Register</h1>
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
          <button>가입하기</button>
          <button>
            <Link to="/login">로그인하러 가기</Link>
          </button>
        </form>
      </div>
    </>
  );
}
