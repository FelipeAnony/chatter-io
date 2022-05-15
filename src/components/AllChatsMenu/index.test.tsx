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
  it('Should render', () => {
    renderEl();
    
  });

  it('Should have a title', ()=>{
    renderEl();
    const element = screen.getByText('Chats');
    expect(element).toBeInTheDocument();
  });

  it('Should have an input', ()=>{
    renderEl();
    const element = screen.getByRole('textbox');
    expect(element).toBeInTheDocument();
  });

});