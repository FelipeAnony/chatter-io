import { screen, render } from "@testing-library/react";

import ChatCard from '.';

const renderEl = () => render( 
  <ChatCard 
    setVisibility={() => null}
    chatTitle="Testing"
    profileImageLink="test"
    lastMessage='Hi'
    date="01/01/1970 - 00:00"
  />
);

describe('UserCard component', () => {
  it('Should render appropiately', () => {
    renderEl();
    expect(screen.getByText('Testing')).toBeInTheDocument();
    expect(screen.getByText('Hi')).toBeInTheDocument();
    expect(screen.getByText("01/01/1970 - 00:00")).toBeInTheDocument();
  });

});