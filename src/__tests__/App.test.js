/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react'
import App from '../App'

describe('<App /> component', () => {
  let AppDOM
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild
  })

  test('renders NumberOfEvents component correctly', () => {
    const { container } = render(<App />)
    const numberOfEventsComponent = container.querySelector('#number-of-events')
    expect(numberOfEventsComponent).toBeInTheDocument()
  })

  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument()
  })

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument()
  })
})
