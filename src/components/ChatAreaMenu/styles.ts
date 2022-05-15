import styled from "styled-components";

type Props = {
  isVisible?: boolean;
};

export const Container = styled.div<Props>`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  max-height: 1200px;

  @media(min-width: 830px){
    display: flex;
    margin: 0 10px;
  }

  .chatInfo{
    display: flex;
    height: 45px;
    align-items: center;
    border-bottom: solid thin #EBEBEB;
    padding-bottom: 5px;
  }

  .chatInfo__backButton {
    width: 30px;
    height: 30px;
    font-size: 22px;
    cursor: pointer;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
      background-color: #EBEBEB;
    }

    @media(min-width: 830px){
      display: none;
    }
  }

  .chatInfo__chatTitle{
    font-weight: bold;
    margin-left: 10px;
  }

  .messagesContainer {
    border-bottom: solid thin #EBEBEB;
    height: calc(100% - 80px);
  }

`