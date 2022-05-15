import { screen, render } from "@testing-library/react";

import SearchBox from '.';

const renderEl = () => render(<SearchBox />);

describe('SearchBox component', () => {
  it('Should render', () => {
    renderEl();
  });

  it('Should have an Input', () => {
    renderEl();
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
    
  });

  it('Should have a "Search for users" placeholder', () => {
    renderEl();
    const element = screen.getByPlaceholderText('Search for users');
    expect(element).toBeInTheDocument();

  });

  it('Should have a button to run search', () => {
    renderEl();
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();

  });

});