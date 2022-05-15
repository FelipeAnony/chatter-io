import { screen, render } from "@testing-library/react";

import UserCard from '.';

const renderEl = () => render( 
  <UserCard 
    setVisibility={() => null}
    userName="Testing"
    profileImageLink="test"
    lastMessage='Hi'
  />
);

describe('UserCard component', () => {
  it('Should render', () => {
    renderEl();

  });

  it('Should have an userName', () => {
    renderEl();
    const element = screen.getByText('Testing');
    expect(element).toBeInTheDocument();

  });

  it('Should show the last message if it exists', () => {
    renderEl();
    const element = screen.getByText('Hi');
    expect(element).toBeInTheDocument();
  });


});