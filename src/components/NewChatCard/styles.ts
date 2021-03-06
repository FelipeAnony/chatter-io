import styled from 'styled-components';

type Props = {
  userTheme: string;
};

export const Container = styled.div<Props>`
  background-color: ${(props) =>
    props.userTheme === 'dark' ? '#000' : '#ebebeb'};
  color: ${(props) => (props.userTheme === 'dark' ? '#fff' : '#000')};
  display: flex;
  align-items: center;
  width: 100%;
  max-height: 80px;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  margin: 5px 0;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: ${(props) =>
      props.userTheme === 'dark' ? '#111' : '#dbdbdb'};
  }

  .userInfo {
    width: 80%;
    flex-direction: column;
    overflow: hidden;
  }

  .userInfo__name {
    font-weight: bold;
  }
`;
