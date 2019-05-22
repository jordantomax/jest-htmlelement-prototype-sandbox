const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

Object.defineProperties(window.HTMLElement.prototype, {
  offsetTop: {
    get: () => {
      console.log(this)
      return 10
    }
  }
})
