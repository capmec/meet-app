/* eslint-disable testing-library/prefer-screen-queries */
import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import NumberOfEvents from '../components/NumberOfEvents'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setNumberOfEvents={() => {}} setErrorAlert={() => {}} />
    )
  })

  test('has the input textbox', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  test('default number of events is 32', () => {
    const input = NumberOfEventsComponent.queryByRole('textbox')
    expect(input).toHaveValue('32')
  })

  test('updates number of events when user types', async () => {
    const input = NumberOfEventsComponent.queryByRole('textbox')
    await userEvent.type(input, '{backspace}{backspace}10')
    expect(input).toHaveValue('10')
  })
})
