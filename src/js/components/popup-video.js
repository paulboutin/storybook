const modalTemplate = src => `
  <aside class='popup-video-modal'>
    <iframe
      src=${src}
      class='popup-video-iframe'
      allow='autoplay; fullscreen'
      allowFullScreen
    ></iframe>

    <i class='icon icon-close'></i>
  </aside>
`

const toggleBodyClass = () => {
  document.body.classList.toggle('popup-video-playing')
}

const removeModal = () => {
  document.querySelector('.popup-video-modal').remove()
}

export default () => {
  const popupVideos = document.querySelectorAll('.popup-video')

  popupVideos.forEach(popupVideo => {
    const play = popupVideo.querySelector('.button')
    const src = popupVideo.dataset.popupVideoSrc

    if (!src) return

    play.addEventListener('click', () => {
      const template = modalTemplate(src)
      const modal = new DOMParser().parseFromString(template, 'text/html')

      document.body.prepend(modal.body)

      const iframe = document.querySelector('.popup-video-modal iframe')
      const player = new Vimeo.Player(iframe)

      toggleBodyClass()

      player.play()
      player.on('ended', () => setTimeout(removeModal, 1000))

      const close = document.querySelector('.popup-video-modal .icon-close')

      close.addEventListener('click', () => {
        player.pause()
        removeModal()
        toggleBodyClass()
      })
    })
  })
}
