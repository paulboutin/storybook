export default () => {
  const carousels = document.querySelectorAll('.splide')

  carousels.forEach(carousel => {
    new Splide(carousel, {
      easing: 'cubic-bezier(0.65,0.05,0.36,1)',
      speed: 450,
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
