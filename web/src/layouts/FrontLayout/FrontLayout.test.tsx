import { render } from '@redwoodjs/testing/web'

import FrontLayout from './FrontLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FrontLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FrontLayout />)
    }).not.toThrow()
  })
})
