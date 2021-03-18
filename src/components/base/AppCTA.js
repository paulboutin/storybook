import React from 'react'
import { prefixImagePath } from '../../utils'

const AppCTA = ({ imgPath = '/img' }) => (
  <div className='app-cta'>
    <a
      href='https://apps.apple.com/us/app/bank-of-the-west-mobile-app/id428713765?ls=1'
      className='app-cta-download'
    >
      <img
        src={prefixImagePath({
          prefix: imgPath,
          src: 'app-store.svg'
        })}
        alt='Download on the App Store'
      />
    </a>
    <a
      href='https://play.google.com/store/apps/details?id=com.botw.mobilebanking'
      className='app-cta-download'
    >
      <img
        src={prefixImagePath({
          prefix: imgPath,
          src: 'google-play.svg'
        })}
        alt='Get it on Google Play'
      />
    </a>
  </div>
)

export default AppCTA
