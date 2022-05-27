import styled from "styled-components";

type Props = {
  isVisible: boolean;
  userTheme: string;
};

export const Container = styled.div<Props>`
  display: ${props => props.isVisible ? 'block': 'none'};
  position: relative;
  background-color: ${props => props.userTheme === 'dark' ? '#222' : '#fff'};
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  height: calc(100vh - 55px);

  @media(min-width: 830px) {
    max-width: 400px;
    margin: 0 10px;
  }

  .title {
    color: ${props => props.userTheme === 'dark' ? 'white' : '#000'};
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .chatsContainer {
    width: 100%;
    height: 70%;
    overflow-y: auto;
  
    @media(min-height: 700px) {
      height: 83%;
    }
  }

`
