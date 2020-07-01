import React from 'react'
import text from '../../knobs/text'

export const Typography = () => {
  const txt = text(
    'Text',
    'Where you put your money matters.\nA bank that finances a sustainable tomorrow.'
  )

  return (
    <div>
      <h2 className='mb-16 text-grey-40'>Headings</h2>

      <p className='text-grey-40 text-xs'>Heading 1</p>
      <h1 className='mb-16'>{txt}</h1>

      <p className='text-grey-40 text-xs'>Heading 2</p>
      <h2 className='mb-16'>{txt}</h2>

      <p className='text-grey-40 text-xs'>Heading 3</p>
      <h3 className='mb-16'>{txt}</h3>

      <p className='text-grey-40 text-xs'>Heading 4</p>
      <h4 className='mb-16'>{txt}</h4>

      <p className='text-grey-40 text-xs'>Heading 5</p>
      <h5 className='mb-16'>{txt}</h5>

      <p className='text-grey-40 text-xs'>Heading 6</p>
      <h6 className='mb-48'>{txt}</h6>

      <h2 className='mb-16 text-grey-40'>Body</h2>

      <p className='text-grey-40 text-xs'>Body large</p>
      <div className='text-lg mb-16'>{txt}</div>

      <p className='text-grey-40 text-xs'>Body base</p>
      <div className='text-base mb-16'>{txt}</div>

      <p className='text-grey-40 text-xs'>Body small</p>
      <div className='text-sm mb-16'>{txt}</div>

      <p className='text-grey-40 text-xs'>Body extra small</p>
      <div className='text-xs mb-16'>{txt}</div>
    </div>
  )
}
