import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
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
  
  &:hover{
    opacity: .9;
  }

`