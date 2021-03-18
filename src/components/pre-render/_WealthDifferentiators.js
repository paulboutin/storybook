import React from 'react'
import Highlight from '../layout/Highlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const WealthDifferentiatorsPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <>
      <Highlight
        reverse
        className='centered'
        type='B'
        title='Unbiased global perspective'
        text='We’ll help you build a global portfolio, leveraging insights from experts across 72 countries, through BNP Paribas.'
        image={prefixImagePath({
          prefix: imgPath,
          src: '/wealth/BOTW_Wealth_Differentiators_Global_Cropped.png'
        })}
      />
      <Highlight
        className='centered'
        type='B'
        title='A focus on you and your goals'
        text='Our approach starts with collaboration. We look at your finances holistically, identify unique opportunities, and monitor your progress to provide ongoing guidance.'
        image={prefixImagePath({
          prefix: imgPath,
          src: '/wealth/BOTW_Wealth_Differentiators_Goals.png'
        })}
      />
      <Highlight
        reverse
        className='centered'
        type='B'
        title='Sustainable impact on the planet'
        text='We don’t just help you invest sustainably, we do it too. We have the strongest environmental stance of any major US bank, and help our clients invest in their values.'
        image={prefixImagePath({
          prefix: imgPath,
          src: '/wealth/BOTW_Wealth_Differentiators_Sustainable.png'
        })}
      />
    </>
  )
}

export default WealthDifferentiatorsPartial
