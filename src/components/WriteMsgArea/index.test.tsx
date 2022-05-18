import { render, screen } from "@testing-library/react";

import WriteMsgArea from ".";

const renderEl = () => render(
  <WriteMsgArea
    emojiIsOpen={true}
    inputMsg={''}
    setEmojiIsOpen={() => null}
    setInputMsg={() => null}
  />
)

describe('WriteMsgArea component', () => {

  it('Should render properly without errors', () => {
    renderEl();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

})