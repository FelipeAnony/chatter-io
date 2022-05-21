import styled from "styled-components";

type Props = {
  size: string;
  color: string;
};

export const Container = styled.div<Props>`
  width: ${props => props.size};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  cursor: pointer;
  border-radius: 5px;
  border: solid thin ${props => props.color};
  font-size: 13px;
  padding: 5px 10px;
  margin: 10px 0%;
  color: white;

  &:hover{
    opacity: .9;
  }

`