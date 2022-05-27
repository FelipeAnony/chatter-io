import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 88%;
  left: calc(100% - 80px);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to right, #6800B9 0%, #DD00AC 100%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 27px;
  padding-top: 5px;

  @media(min-width: 830px){
    left: 340px;
  }
  
  &:hover{
    opacity: .9;
  }

`