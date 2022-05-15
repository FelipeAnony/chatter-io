import { screen, render } from "@testing-library/react";
import ProfilePhoto from ".";

const renderEl = () => render(<ProfilePhoto imageSrc="none"/>)

describe('ProfilePhoto component', () => {

  it('Should render properly without errors', () => {
    renderEl();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

});