import React from 'react'
import ProductPage from '../../../components/templates/ProductPage'
import ThirdPartyPopup from '../../../components/layout/ThirdPartyPopup'

export const ThirdParty = () => {
  return (
    <>
      <ProductPage />
      <ThirdPartyPopup title='You are leaving Bank of the West'>
        <p className='text-sm'>
          Please be aware: The website you are about to enter is not operated by
          Bank of the West. Bank of the West does not endorse the content of
          this website and makes no warranty as to the accuracy of the content
          or functionality of this website. The privacy and security policies of
          the site may differ from those practiced by Bank of the West.
        </p>
        <p className='text-sm'>
          To proceed to this website, select Continue, or Cancel to remain on
          the Bank of the West website.
        </p>
      </ThirdPartyPopup>
    </>
  )
}

export default {
  title: 'Layout Components/Popups'
}
