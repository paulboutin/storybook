export default () => {
  const popupVideos = document.querySelectorAll('.popup-video')

  popupVideos.forEach(popupVideo => {
    const play = popupVideo.querySelector('.button')
    const close = popupVideo.querySelector('.icon-close')
    const iframe = popupVideo.querySelector('iframe')
    const player = new Vimeo.Player(iframe)

    play.addEventListener('click', () => {
      popupVideo.scrollIntoView({ behavior: 'smooth', block: 'center' })
      document.body.classList.add('popup-video-playing')
      player.play()
    })

    close.addEventListener('click', () => {
      popupVideo.scrollIntoView({ behavior: 'smooth', block: 'center' })
      player.pause()
      document.body.classList.remove('popup-video-playing')
    })
  })
}
