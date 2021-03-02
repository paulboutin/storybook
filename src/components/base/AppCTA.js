import React from 'react'

const AppCTA = () => (
  <div className='app-cta'>
    <a
      href='https://apps.apple.com/us/app/bank-of-the-west-mobile-app/id428713765?ls=1'
      className='app-cta-download'
    >
      <img src='/img/app-store.svg' alt='Download on the App Store' />
    </a>
    <a
      href='https://play.google.com/store/apps/details?id=com.botw.mobilebanking'
      className='app-cta-download'
    >
      <img src='/img/google-play.svg' alt='Get it on Google Play' />
    </a>
  </div>
)

export default AppCTA
