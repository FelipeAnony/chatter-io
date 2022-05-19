import styled from "styled-components";

type Props = {
  userTheme: string;
};

export const Container = styled.div<Props>`
  width: 100%;
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 100%;
  height: 100vh;
  background-color: ${props => props.userTheme === 'dark' ? '#333' : '#e5e5e5'};

  header{
    width: 100%;
    background-color: ${props => props.userTheme === 'dark' ? '#222' : '#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .logo {
    margin-left: calc(100% /2 - 50px);
    width: 100px;
    
    img {
      width: 100%;
      height: auto;
    }
  }

  .innerContainer{
    margin: 10px auto;
    display: flex;
    justify-content: center;
    width: 100%;
  }
`