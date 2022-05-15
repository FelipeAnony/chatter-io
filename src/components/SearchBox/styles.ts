import styled from "styled-components";

export const Container = styled.div`
  background-color: #e4e4e4;
  border-radius: 10px;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  color: #868686;

  button{
    border: none;
    background-color: transparent;
    margin: 2px 0;
    color: inherit;
    cursor: pointer;
  }

  input{
    width: 90%;
    background-color: transparent;
    border: none;
    outline:none;
    margin-left: 5px;
  }
`