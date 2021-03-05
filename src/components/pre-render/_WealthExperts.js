import React from 'react'
import Highlight from '../layout/Highlight'
import Link from '../base/Link'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const title = 'Your team of specialists'
const text =
  'Work with a single point of contact, who will take the time to understand your entire financial picture. ' +
  'To meet the complexity of your needs and help bring your goals within reach, your advisor will leverage local and ' +
  'global wealth professionals who specialize in just what you’re looking for.'

const WealthExpertsHeroPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <Highlight
      className='centered'
      type='B'
      title={title}
      text={text}
      image={prefixImagePath({
        prefix: imgPath,
        src: '/wealth/BOTW_Wealth_Experts.jpg'
      })}
    >
      <div className='flex-content'>
        <Link
          standalone
          href='https://www.bankofthewest.com/wealth-management/our-approach'
        >
          Learn More
        </Link>
      </div>
    </Highlight>
  )
}

export default WealthExpertsHeroPartial
