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

      <p className='sb:typography-title'>
        Heading 1 <i>.text-h1</i>
      </p>
      <h1 className='sb:typography-text'>{htmlText}</h1>

      <p className='sb:typography-title'>
        Heading 2 <i>.text-h2</i>
      </p>
      <h2 className='sb:typography-text'>{htmlText}</h2>

      <p className='sb:typography-title'>
        Heading 3 <i>.text-h3</i>
      </p>
      <h3 className='sb:typography-text'>{htmlText}</h3>

      <p className='sb:typography-title'>
        Heading 4 <i>.text-h4</i>
      </p>
      <h4 className='sb:typography-text'>{htmlText}</h4>

      <p className='sb:typography-title'>
        Heading 5 <i>.text-h5 .font-bold</i>
      </p>
      <h5 className='sb:typography-text'>{htmlText}</h5>

      <p className='sb:typography-title'>
        Heading 6 <i>.text-h6 .font-bold</i>
      </p>
      <h6 className='sb:typography-text'>{htmlText}</h6>

      <h2 className='sb:typography-heading'>Body</h2>

      <p className='sb:typography-title'>
        Body large <i>.text-lg</i>
      </p>
      <div className='sb:typography-text--lg'>{htmlText}</div>

      <p className='sb:typography-title'>
        Body base <i>.text-base</i>
      </p>
      <div className='sb:typography-text--base'>{htmlText}</div>

      <p className='sb:typography-title'>
        Body small <i>.text-sm</i>
      </p>
      <div className='sb:typography-text--sm'>{htmlText}</div>

      <p className='sb:typography-title'>
        Body extra small <i>.text-xs</i>
      </p>
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
