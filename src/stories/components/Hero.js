import { radios } from '@storybook/addon-knobs'

export const Hero = () => {
  const type = radios('Type', ['Full', 'Spaced'], 'Full').toLowerCase()

  return `
    <div class='hero hero-${type}'>
      <img class='hero-img' src='http://via.placeholder.com/1600' alt='Hero image'>
      <div class='hero-content'>
        <p class='hero-title'>Any deposit checking</p>
        <h2 class='hero-heading'>No hidden fees.<br>No hassle.</h2>
        <p class='hero-text'>Open an account in about 10 minutes</p>
        <a class='btn btn-primary hero-btn' href='#'>Apply now</a>
        <p class='hero-subtext'>
          <span>Not in Alabama?</span>
          <span class='font-bold underline cursor-pointer'>Change your state</span>
        </p>
      </div>
    </div>    
  `
}
