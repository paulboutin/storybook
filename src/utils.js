export function slugify(string) {
  return string
    .replace(/[^\w\s-]/g, '')
    .replace(/\s/g, '-')
    .toLowerCase()
}

export function swipeDetect(el, callback) {
  let swipeDir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleSwipe = callback || function(swipeDir) {}

  el.addEventListener(
    'touchstart',
    function(e) {
      let touchObj = e.changedTouches[0]
      swipeDir = 'none'
      startX = touchObj.pageX
      startY = touchObj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface

      e.preventDefault()
    },
    false
  )

  el.addEventListener(
    'touchmove',
    function(e) {
      e.preventDefault() // prevent scrolling when inside DIV
    },
    false
  )

  el.addEventListener(
    'touchend',
    function(e) {
      let touchObj = e.changedTouches[0]
      distX = touchObj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchObj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime) {
        // first condition for swipe met
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          // 2nd condition for horizontal swipe met
          swipeDir = distX < 0 ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
        } else if (
          Math.abs(distY) >= threshold &&
          Math.abs(distX) <= restraint
        ) {
          // 2nd condition for vertical swipe met
          swipeDir = distY < 0 ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
        }
      }
      handleSwipe(swipeDir)
      e.preventDefault()
    },
    false
  )
}
