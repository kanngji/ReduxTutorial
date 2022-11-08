import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  padding: 1rem;
`;

export default function Footer() {
  return (
    <>
      <Div style={{ textAlign: "center" }}>this web page is made by kangji</Div>
    </>
  );
}
