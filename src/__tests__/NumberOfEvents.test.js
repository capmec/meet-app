/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import NumberOfEvents from '../components/NumberOfEvents'

// Utility function to render the component and find elements by role
const setup = () => {
  const utils = render(<NumberOfEvents setNumberOfEvents={() => {}} />)
  const input = utils.getByRole('textbox')
  return { input, ...utils }
}

// Test to ensure the NumberOfEvents component contains an element with the role of textbox
test('NumberOfEvents component contains an element with the role of textbox', () => {
  const { input } = setup()
  expect(input).toBeInTheDocument()
})

// Test to ensure the default value of the input field is 32
test('default value of the input field is 32', () => {
  const { input } = setup()
  expect(input.value).toBe('32')
})

// Test to ensure the value of the NumberOfEvents component’s textbox changes accordingly when a user types in it
test("value of the NumberOfEvents component's textbox changes correctly when user types in it", async () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: '10' } })
  expect(input.value).toBe('10')
})
