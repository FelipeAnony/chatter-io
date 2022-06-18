import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  bottom: 30px;
  left: 80%;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to right, #6800b9 0%, #dd00ac 100%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 27px;
  padding-top: 5px;

  &:hover {
    opacity: 0.9;
  }
`;
