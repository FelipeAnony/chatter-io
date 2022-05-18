import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;


  input{
    width: 80%;
    margin: 0 10px;
    border: none;
    outline: none;
  }

  .emojiButton, .sendButton {
    font-size: 22px;
    cursor: pointer;
    margin-top: 5px;
  }

`