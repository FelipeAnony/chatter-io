import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-template-columns: 100%;
  height: 100vh;

  header{
    width: 100%;
    background-color: #FFF;
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