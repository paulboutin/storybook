import React from 'react'
import Button from '../base/Button'
import Highlight from '../layout/Highlight'
import Link from '../base/Link'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'Align a global wealth strategy with your values'
const text =
  'Your dedicated advisor will approach your entire financial picture, and help you invest sustainably and competitively.'

const WealthHeroPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => {
  return (
    <Highlight
      className='centered'
      type='A'
      title={title}
      text={text}
      image={prefixImagePath({
        prefix: imgPath,
        src: '/wealth/BOTW_Wealth_Hero_Tree.png'
      })}
    >
      <div className='flex-content'>
        <Button
          type='primary'
          link
          href='https://www.bankofthewest.com/alpha2/Wealth-Management/find-an-advisor'
          label='Find your advisor'
        />
        <Link href='tel:1-800-435-1912'>1-800-435-1912</Link>
        <Link href='tel:1-800-659-5495'>TTY:1-800-659-5495</Link>
        <p>24/7 Exclusive Assistance</p>
      </div>
    </Highlight>
  )
}

export default WealthHeroPartial
