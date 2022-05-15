import styled from "styled-components";

type Props = {
  ballonSide: string; 
}

export const Container = styled.div<Props>`
  padding: 5px;
  max-width: 300px;
  min-height: 20px;
  margin: 10px 0;
  display: flex;
  
  background-color: ${props => props.ballonSide === 'left' ? '#EBEBEB' : '#6800B9'};
  margin-left: ${props => props.ballonSide === 'left' ? 0 : 'auto'};
  border-top-left-radius: ${props => props.ballonSide === 'left' ? 0 : '10px'};
  border-top-right-radius: ${props => props.ballonSide === 'left' ? '10px' : 0};
  
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  .textContainer {
    min-width: 30px;
    max-width: 100%;
    color: ${props => props.ballonSide === 'left' ? 'black' : 'white'};
    margin-left: ${props => props.ballonSide === 'left' ? 0 : 'auto'};
    word-break: break-all;
  }

`