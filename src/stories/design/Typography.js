import { text } from '@storybook/addon-knobs'

export const Typography = () => {
  const txt = text(
    'Text',
    'Where you put your money matters.\nA bank that finances a sustainable tomorrow.'
  ).replace(/\n/g, '<br>')

  return `
    <div class='container'>
      <p class='text-grey-55 text-xs'>Heading 1</p>
      <h1 class='mb-base'>${txt}</h1>
      
      <p class='text-grey-55 text-xs'>Heading 2</p>
      <h2 class='mb-base'>${txt}</h2>
      
      <p class='text-grey-55 text-xs'>Heading 3</p>
      <h3 class='mb-base'>${txt}</h3>
      
      <p class='text-grey-55 text-xs'>Heading 4</p>
      <h4 class='mb-base'>${txt}</h4>
      
      <p class='text-grey-55 text-xs'>Heading 5</p>
      <h5 class='mb-base'>${txt}</h5>
      
      <p class='text-grey-55 text-xs'>Heading 6</p>
      <h6 class='mb-base'>${txt}</h6>
      
      <p class='text-grey-55 text-xs'>Body large</p>
      <div class='text-lg mb-base'>${txt}</div>
      
      <p class='text-grey-55 text-xs'>Body base</p>
      <div class='text-base mb-base'>${txt}</div>
      
      <p class='text-grey-55 text-xs'>Body small</p>
      <div class='text-sm mb-base'>${txt}</div>
      
      <p class='text-grey-55 text-xs'>Body extra small</p>
      <div class='text-xs mb-base'>${txt}</div>
    </div>
  `
}
