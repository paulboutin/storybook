export default () => {
  const carousels = document.querySelectorAll('.splide')

  carousels.forEach(carousel => {
    new Splide(carousel, {
      perMove: 1,
      perPage: 3,
      breakpoints: {
        992: {
          perPage: 2
        },
        768: {
          perPage: 1
        }
      }
    }).mount()
  })
}
