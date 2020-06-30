import { text } from '@storybook/addon-knobs'

export const Typography = () => {
  const txt = text(
    'Text',
    'Where you put your money matters.\nA bank that finances a sustainable tomorrow.'
  ).replace(/\n/g, '<br>')

  return `
    <div class='container'>
      <h2 class="mb-16 text-grey-40">Headings</h2>
      <p class='text-grey-40 text-xs'>Heading 1</p>
      <h1 class='mb-16'>${txt}</h1>
      
      <p class='text-grey-40 text-xs'>Heading 2</p>
      <h2 class='mb-16'>${txt}</h2>
      
      <p class='text-grey-40 text-xs'>Heading 3</p>
      <h3 class='mb-16'>${txt}</h3>
      
      <p class='text-grey-40 text-xs'>Heading 4</p>
      <h4 class='mb-16'>${txt}</h4>
      
      <p class='text-grey-40 text-xs'>Heading 5</p>
      <h5 class='mb-16'>${txt}</h5>
      
      <p class='text-grey-40 text-xs'>Heading 6</p>
      <h6 class='mb-48'>${txt}</h6>
      
      <h2 class="mb-16 text-grey-40">Body</h2>
      <p class='text-grey-40 text-xs'>Body large</p>
      <div class='text-lg mb-16'>${txt}</div>
      
      <p class='text-grey-40 text-xs'>Body base</p>
      <div class='text-base mb-16'>${txt}</div>
      
      <p class='text-grey-40 text-xs'>Body small</p>
      <div class='text-sm mb-16'>${txt}</div>
      
      <p class='text-grey-40 text-xs'>Body extra small</p>
      <div class='text-xs mb-16'>${txt}</div>
    </div>
  `
}
