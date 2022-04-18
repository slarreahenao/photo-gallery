import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('<App />', () => {
  it('should render correctly', () => {
    const appComponent = render(<App />)
    expect(appComponent).toMatchSnapshot()
  })
})
