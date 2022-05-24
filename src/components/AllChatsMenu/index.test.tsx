import { screen, render } from "@testing-library/react";

import AllChatsMenu from ".";

const renderEl = () => render(
  <AllChatsMenu 
    screenWidth={830}
    setVisibility={() => null}
    visibility={true}
    
  />
);

describe('AllChatsMenu component', () => {
  it('Should render appropiately', () => {
    renderEl();
    expect(screen.getByText('Chats')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

});