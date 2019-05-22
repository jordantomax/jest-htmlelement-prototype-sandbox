import React from 'react'
import { mount } from 'enzyme'

class Component extends React.Component {
  constructor (props) {
    super(props)

    this.ref = React.createRef()
  }

  render () {
    return (
      <div>
        <span ref={this.ref}>the ref</span>
      </div>
    )
  }
}

describe('Overwritten HTMLElement prototype', () => {
  it('references this inside of overwritten offsetTop', () => {
    const wrapper = mount(<Component />)
    const ref = wrapper.instance().ref.current
    console.log(ref.offsetTop)
  })
})
