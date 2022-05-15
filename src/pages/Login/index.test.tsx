import { screen, render } from "@testing-library/react";
import Login from './index';

const renderEl = () => {
  return render(
    <Login />
  );
};

describe('Login Page', () => {
  it('Should render', () => {
    renderEl();
  });

});