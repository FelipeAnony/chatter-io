import { render } from "@testing-library/react";

import MessageBallon from "./index";

const renderEl = () => render(<MessageBallon side="left"/>);

describe('MessageBallon component', () => {
  it('Should render', () => {
    renderEl();

  });
});