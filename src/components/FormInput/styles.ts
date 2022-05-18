import styled from "styled-components";

type Props = {
  error: string;
};

export const Container = styled.div<Props>`
  width: 100%;
  margin: 5px 0;

  .innerContainer {
    color: ${props => props.error ? 'red' : '#333'};
    display: flex;
    flex-direction: column;
    background-color: #ebebeb;
    padding: 1px 5px;
    border-radius: 8px;
    border: solid thin ${props => props.error ? 'red' : '#999'};
    font-size: 11px;
  }

  input {
    color: #333;
    width: 100%;
    outline: none;
    background-color: transparent;
    border: none;
  }

  .errorMsg{
    font-size: 12px;
    padding-left: 5px;
    color: red;
  }

`

