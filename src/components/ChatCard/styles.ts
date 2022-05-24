import styled from "styled-components";

type Props = {
  userTheme: string;
};

export const Container = styled.div<Props>`
  background-color: ${props => props.userTheme === 'dark' ? '#000' : '#ebebeb'};
  color: ${props => props.userTheme === 'dark' ? '#fff' : '#000'};
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
    background-color: ${props => props.userTheme === 'dark' ? '#111' : '#dbdbdb'};  
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

  .userInfo__date {
    margin-top: 10px;
    font-size: 10px;
    opacity: .6;
  }

`