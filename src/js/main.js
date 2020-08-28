import accordions from './components/accordion'
import inputs from './components/input'
import navigation from './components/navigation'
import popupVideo from './components/popup-video'
import selects from './components/select'
import sliders from './components/slider'

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
    navigation()
    popupVideo()
    selects()
    sliders()
  })
}

if (process.env.NODE_ENV === 'production') {
  setup()
}

export default setup
