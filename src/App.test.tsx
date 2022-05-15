import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

it('Should render', () => {
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  )
});

