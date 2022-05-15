import {  render } from "@testing-library/react";

import ThemeSwitch from ".";

describe('ThemeSwitch component', () => {
  it('Should render properly without errors', () =>{
    render(<ThemeSwitch/>);
  });
});