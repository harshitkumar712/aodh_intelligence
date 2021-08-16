import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { device } from "../constants/mediaQueries";

const Modal = ({ open, children, close }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <Container onClick={close}>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <span onClick={close} className="close">
          &times;
        </span>
        <div>{children}</div>
      </Wrapper>
    </Container>,
    document.querySelector("#modal")
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 200;
  padding-top: 20vh;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  text-align: center;
  border-radius: 10px;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 40%;
  font-size: 1rem;
  button {
    border: none;
    color: #fff;
    padding: 0.5rem 1rem;
    background: #0cb2b2;
    border-radius: 10px;
    margin: 1rem;
    width: 100px;
  }

  @media ${device.md} {
    width: 60%;
  }
  @media ${device.sm} {
    width: 80%;
  }
`;
export default Modal;
