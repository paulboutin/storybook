import React from 'react'
import Infographic from '../layout/Infographic'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const items = [
  {
    title: '$100B',
    text: 'in Assets'
  },
  {
    title: '$80.3B',
    text: 'in Deposits'
  },
  {
    title: '147',
    text: 'Years in Business'
  },
  {
    title: '72',
    text: 'Countries We serve'
  },
  {
    title: '3,000+',
    text: 'Commercial Banking Relationships'
  },
  {
    title: '28',
    text: 'Commercial Banking Centers in USA'
  }
]

const CommercialInfographicPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return (
    <Infographic
      background={prefixImagePath({
        prefix: imgPath,
        src: '/commercial/BOTW_Commercial_Infographic_World.png'
      })}
      headline='What we do'
      text='At Bank of the West, we embrace a collaborative, solutions-based approach to serving corporate clients.'
      items={items}
    />
  )
}

export default CommercialInfographicPartial
