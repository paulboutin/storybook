import accordions from './components/accordion'
import inputs from './components/input'

function ready(fn) {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(fn, 0)
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function setup() {
  ready(() => {
    accordions()
    inputs()
  })
}

if (process.env.NODE_ENV === 'production') {
  setup()
}

export default setup
