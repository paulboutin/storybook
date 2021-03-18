import React from 'react'
import Highlight from '../layout/Highlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const CommercialDifferentiatorsPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <>
      <Highlight
        reverse
        className='centered'
        type='B'
        title='Positive banking'
        text='A sustainable supply chain for your business starts with your bank. With our progressive values, we help to accelerate renewable energy and support workplace diversity.'
        image={prefixImagePath({
          prefix: imgPath,
          src: '/commercial/BOTW_Commercial_Differentiators_PositiveBanking.png'
        })}
      />
      <Highlight
        className='centered'
        type='B'
        title='Dedicated Advisors'
        text='You’ll work with a single point of contact, your dedicated Relationship Manager, who will tailor business solutions designed to meet the distinct needs of your business.'
        image={prefixImagePath({
          prefix: imgPath,
          src: '/commercial/BOTW_Commercial_Differentiators_Advisors.png'
        })}
      />
      <Highlight
        reverse
        className='centered'
        type='B'
        title='Scalable Solutions'
        text='We’ll work with you to meet your business needs at every stage of your company’s growth, helping you become more agile, efficient, and competitive.'
        image={prefixImagePath({
          prefix: imgPath,
          src: '/commercial/BOTW_Commercial_Differentiators_Scalable.jpg'
        })}
      />
    </>
  )
}

export default CommercialDifferentiatorsPartial
