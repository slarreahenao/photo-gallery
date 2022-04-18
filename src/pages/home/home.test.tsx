import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './home'

describe('<Home />', () => {
  it('render correctly', () => {
    const homePage = render(<Home />)
    homePage.getByText('Home')
  })
})
