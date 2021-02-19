import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import Navigation from '../../../components/layout/Navigation'
import Highlight from '../../../components/layout/Highlight'
import ThirdPartyPopup from '../../../components/layout/ThirdPartyPopup'
import Link from '../../../components/base/Link'

export const ThirdParty = () => {
  const showModalOnly = boolean('Show component markup only', false)

  const MockPage = () => (
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

  return showModalOnly ? <ThirdPartyPopup /> : <MockPage />
}

export default {
  title: 'Layout Components/Popups'
}
