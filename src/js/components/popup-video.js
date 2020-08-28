export default () => {
  const popupVideo = document.querySelector('.popup-video')
  if (!popupVideo) return

  const play = popupVideo.querySelector('.button')
  const close = popupVideo.querySelector('.icon-close')
  const iframe = popupVideo.querySelector('iframe')
  const player = new Vimeo.Player(iframe)

  play.addEventListener('click', () => {
    popupVideo.classList.add('popup-video-playing')
    player.play()
  })

  close.addEventListener('click', () => {
    player.pause()
    popupVideo.classList.remove('popup-video-playing')
  })
}
