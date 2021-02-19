import React from 'react'
import Navigation from '../../../components/layout/Navigation'
import Highlight from '../../../components/layout/Highlight'
import Link from '../../../components/base/Link'

export const ThirdParty = () => {
  return (
    <>
      <Navigation />
      <Highlight
        type='A'
        title='External Link Test'
        text='Click link to test third-party link popup'
        image='/img/trees.png'
      >
        <Link href='https://www.google.com' standalone>
          External link
        </Link>
      </Highlight>
    </>
  )
}

export default {
  title: 'Layout Components/Popups'
}
