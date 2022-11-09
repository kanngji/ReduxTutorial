import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Diary() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
  });
  return (
    <>
      <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
        <h1>이런 순서로 개발이 되었어요!</h1>
      </div>
    </>
  );
}
