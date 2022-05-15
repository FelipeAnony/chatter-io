import styled from "styled-components";

type Props = {
  Theme: string;
};

export const Container = styled.div<Props>`
  width: 50px;
  height: 23px;
  margin-left: auto;
  margin-right: 40px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .lightIcon, .darkIcon {
    display: flex;
    align-items: center;
    cursor: pointer;
    z-index: 10;
  }

  .lightIcon {
    color: white;
    margin-right: 2px;
  }

  .darkIcon {
    color: #ebebeb;
    margin-left: 2px;
  }

  .selector {
    width: 80px;
    height: 100%;
    background: linear-gradient(to right, #6800B9 0%, #DD00AC 100%);
    position: absolute;
    padding: 1px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${props => props.Theme === 'light' ? '-0px' : '-30px'};
    transition: all ease .2s;

    .pointer {
      background-color: black;
      opacity: .4;
      border-radius: 50%;
      width: 20px;
      height: 100%;
    }
  }

`