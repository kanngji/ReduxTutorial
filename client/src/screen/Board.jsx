import React from "react";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Board() {
  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "auto auto",
          textAlign: "center",
          border: "1px solid yellow",
        }}
      >
        <h1>이것도 먹어보시지~</h1>
        <Button
          variant="outline-dark"
          style={{ width: "100%" }}
          onClick={() => Navigate("create")}
        >
          작성하기
        </Button>
      </div>
      <div
        className="container"
        style={{ width: "90%", height: "90vh", border: "1px solid red" }}
      >
        asdsadfsdf
      </div>
      ;
    </>
  );
}
