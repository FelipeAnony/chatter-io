import { screen, render } from "@testing-library/react";

import SearchBox from '.';

const renderEl = () => render(<SearchBox />);

describe('SearchBox component', () => {
  it('Should render appropiately', () => {
    renderEl();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search for users')).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

});