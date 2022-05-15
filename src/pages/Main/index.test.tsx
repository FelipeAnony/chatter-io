import { screen, render } from "@testing-library/react";
import Main from './index';

describe('Main page', () => {
  const renderEL = () => {
   return render(<Main />)
  };

  it('Should render', () => {
    renderEL();
  });

  it('Should have a title', () => {
    renderEL();
    const element = screen.getByText('Chatter.io');
    expect(element).toBeInTheDocument();
  });

});