import styled from "styled-components";

type Props = {
  isVisible: boolean;
};

export const Container = styled.div<Props>`
  display: ${props => props.isVisible ? 'block': 'none'};
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  max-height: 1200px;

  @media(min-width: 830px) {
    max-width: 400px;
    margin: 0 10px;
  }

  .title {
    margin-top: 20px;
    margin-bottom: 10px;
  }

`
