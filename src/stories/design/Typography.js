import React from 'react'
import text from '../../knobs/text'

export const Typography = () => {
  const txt = text(
    'Text',
    'Where you put your money matters.\nA bank that finances a sustainable tomorrow.'
  )

  return (
    <div>
      <h2 className='sb:typography-heading'>Headings</h2>

      <p className='sb:typography-title'>Heading 1</p>
      <h1 className='sb:typography-text'>{txt}</h1>

      <p className='sb:typography-title'>Heading 2</p>
      <h2 className='sb:typography-text'>{txt}</h2>

      <p className='sb:typography-title'>Heading 3</p>
      <h3 className='sb:typography-text'>{txt}</h3>

      <p className='sb:typography-title'>Heading 4</p>
      <h4 className='sb:typography-text'>{txt}</h4>

      <p className='sb:typography-title'>Heading 5</p>
      <h5 className='sb:typography-text'>{txt}</h5>

      <p className='sb:typography-title'>Heading 6</p>
      <h6 className='sb:typography-text'>{txt}</h6>

      <h2 className='sb:typography-heading'>Body</h2>

      <p className='sb:typography-title'>Body large</p>
      <div className='sb:typography-text--lg'>{txt}</div>

      <p className='sb:typography-title'>Body base</p>
      <div className='sb:typography-text--base'>{txt}</div>

      <p className='sb:typography-title'>Body small</p>
      <div className='sb:typography-text--sm'>{txt}</div>

      <p className='sb:typography-title'>Body extra small</p>
      <div className='sb:typography-text--xs'>{txt}</div>
    </div>
  )
}
