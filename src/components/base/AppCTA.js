import React from 'react'
import AppStore from '../../svg/appstore.svg'
import GooglePlay from '../../svg/googleplay.svg'

const AppCTA = () => (
  <div className='app-cta'>
    <a href='#'>
      <AppStore />
    </a>
    <a href='#'>
      <GooglePlay />
    </a>
  </div>
)

export default AppCTA
