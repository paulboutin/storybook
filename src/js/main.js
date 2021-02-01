import accordions from './components/accordion'
import helpCenter from './components/help-center'
import comparison from './components/comparison'
import inputs from './components/input'
import navigation from './components/navigation'
import popupVideo from './components/popup-video'
import dropdowns from './components/dropdown'
import sliders from './components/slider'
import alerts from './components/alert'
import returnToTop from './components/return-to-top'

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
    helpCenter()
    comparison()
    inputs()
    navigation()
    popupVideo()
    dropdowns()
    sliders()
    alerts()
    returnToTop()
  })
}

if (process.env.NODE_ENV === 'production') {
  setup()
}

export default setup
