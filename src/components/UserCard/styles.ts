import styled from "styled-components";

export const Container = styled.div`
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 80px;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  margin: 10px 0;
  cursor: pointer;

  &:hover{
    background-color: #dbdbdb;  
  }

  .userInfo{
    width: 80%;
    flex-direction: column;
    overflow: hidden;
  }

  .userInfo__name {
    font-weight: bold;
  }

  .userInfo__lastMessage {
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`