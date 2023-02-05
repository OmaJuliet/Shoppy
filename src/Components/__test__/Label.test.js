import {cleanup, fireEvent, render} from '@testing-library/react';
import Label from '../Label';

afterEach(cleanup);

it('Label changes the text after click', () => {
  const {queryByLabelText, getByLabelText} = render(
    <Label labelOn="On" labelOff="Off" />,
  );

  expect(queryByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(queryByLabelText(/on/i)).toBeTruthy();
});