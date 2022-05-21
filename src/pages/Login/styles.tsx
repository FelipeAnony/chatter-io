import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    width: 100px;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  h3 {
    color: #777;
    margin-bottom: 15px;
  }

  hr {
    margin-top: 30px;
    height: 1px;
    width: 90%;
  }

  .googleLoginBtn {
    width: 80%;
    padding: 5px 10px;
    margin-top: 10px;
    color: white;
    border: solid thin grey;
    border-radius: 5px;
    cursor: pointer;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    background-color: slategrey;

    &:hover{
      opacity: .9;
    }
  }

  a {
    margin: 10px 0;
    color: black;

    &:hover{
      color: #6800B9;
    }
  }

  .googleLogo {
    font-size: 22px;
    margin-right: 10px;
    background-color: white;
    padding: 1px;
  }

  .linkToSignUp{
    margin: 10px 0;
  }

`