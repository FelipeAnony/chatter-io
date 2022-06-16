import styled from 'styled-components';

type Props = {
  userTheme: string;
  visibility: boolean;
};

export const Container = styled.div<Props>`
  display: ${(props) => (props.visibility ? 'flex' : 'none')};
  flex-direction: column;
  width: calc(100%);
  height: calc(100%);
  background-color: ${(props) =>
    props.userTheme === 'dark' ? '#222' : '#fff'};
  border-radius: 5px;

  h1 {
    margin: 5px 0;
  }

  .backButtonContainer {
    color: ${(props) => (props.userTheme === 'dark' ? 'white' : 'dark')};
    font-size: 20px;
    padding: 2px;
    cursor: pointer;

    .backButton {
      width: 35px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      &:hover {
        background-color: #cccccc40;
      }
    }
  }

  .innerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 2px;
  }
`;
