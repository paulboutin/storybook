import React from 'react'
import text from '../../knobs/text'

export const Typography = () => {
  const txt = text(
    'Text',
    'Where you put your money matters.\nA bank that finances a sustainable tomorrow.'
  )

  return (
    <div>
      <h2 className='ds:typography-heading'>Headings</h2>

      <p className='ds:typography-title'>Heading 1</p>
      <h1 className='ds:typography-text'>{txt}</h1>

      <p className='ds:typography-title'>Heading 2</p>
      <h2 className='ds:typography-text'>{txt}</h2>

      <p className='ds:typography-title'>Heading 3</p>
      <h3 className='ds:typography-text'>{txt}</h3>

      <p className='ds:typography-title'>Heading 4</p>
      <h4 className='ds:typography-text'>{txt}</h4>

      <p className='ds:typography-title'>Heading 5</p>
      <h5 className='ds:typography-text'>{txt}</h5>

      <p className='ds:typography-title'>Heading 6</p>
      <h6 className='ds:typography-text'>{txt}</h6>

      <h2 className='ds:typography-heading'>Body</h2>

      <p className='ds:typography-title'>Body large</p>
      <div className='ds:typography-text--lg'>{txt}</div>

      <p className='ds:typography-title'>Body base</p>
      <div className='ds:typography-text--base'>{txt}</div>

      <p className='ds:typography-title'>Body small</p>
      <div className='ds:typography-text--sm'>{txt}</div>

      <p className='ds:typography-title'>Body extra small</p>
      <div className='ds:typography-text--xs'>{txt}</div>
    </div>
  )
}
