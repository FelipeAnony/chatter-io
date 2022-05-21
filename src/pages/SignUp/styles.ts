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
  }

`