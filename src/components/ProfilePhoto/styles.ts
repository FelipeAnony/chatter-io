import styled from "styled-components"

type Props = {
  size?: string;
};

export const Container = styled.div<Props>`
  border-radius: 50%;
  width: ${props => props.size ? '40px' : '60px'};
  height: ${props => props.size ? '40px' : '60px'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, #6800B9 0%, #DD00AC 100%);
  margin-right: 10px;
  flex-shrink: 0;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  .person {
    color: white;
    font-size: ${props => props.size ? '28px' : '32px'};
  }

` 