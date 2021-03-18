import React from 'react'
import AppCTA from '../base/AppCTA'
import * as config from '../../config'

const WealthAppPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => (
  <div className='container flex-content centered'>
    <p className='font-bold text-center'>
      Download the app
      <br />
      Voice of Wealth
    </p>
    <AppCTA imgPath={imgPath} />
  </div>
)

export default WealthAppPartial
