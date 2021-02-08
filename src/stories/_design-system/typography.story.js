import React from 'react'
import { text } from '@storybook/addon-knobs'

export const Typography = () => {
  const rawText = text(
    'Text',
    'Where you put your money matters.\nA bank that finances a sustainable tomorrow.'
  )

  const htmlText = (
    <span
      dangerouslySetInnerHTML={{ __html: rawText.replace(/\n/g, '<br>') }}
    />
  )

  return (
    <div>
      <h2 className='sb:typography-heading'>Headings</h2>

      <p className='sb:typography-title'>Heading 1</p>
      <h1 className='sb:typography-text'>{htmlText}</h1>

      <p className='sb:typography-title'>Heading 2</p>
      <h2 className='sb:typography-text'>{htmlText}</h2>

      <p className='sb:typography-title'>Heading 3</p>
      <h3 className='sb:typography-text'>{htmlText}</h3>

      <p className='sb:typography-title'>Heading 4</p>
      <h4 className='sb:typography-text'>{htmlText}</h4>

      <p className='sb:typography-title'>Heading 5</p>
      <h5 className='sb:typography-text'>{htmlText}</h5>

      <p className='sb:typography-title'>Heading 6</p>
      <h6 className='sb:typography-text'>{htmlText}</h6>

      <h2 className='sb:typography-heading'>Body</h2>

      <p className='sb:typography-title'>Body large</p>
      <div className='sb:typography-text--lg'>{htmlText}</div>

      <p className='sb:typography-title'>Body base</p>
      <div className='sb:typography-text--base'>{htmlText}</div>

      <p className='sb:typography-title'>Body small</p>
      <div className='sb:typography-text--sm'>{htmlText}</div>

      <p className='sb:typography-title'>Body extra small</p>
      <div className='sb:typography-text--xs'>{htmlText}</div>
    </div>
  )
}

export default {
  title: 'Design System',
  parameters: {
    'in-dsm': {
      id: '602107fa8aff019532d6b009'
    }
  }
}
