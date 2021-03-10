import React from 'react'
import Navigation from '../layout/Navigation'
import RetailHeroPartial from './_RetailHero'
import RetailStoryTellingPartial from './_RetailStorytelling'
import RetailAffiliatePartial from './_RetailAffiliate'
import RetailProductSelectorPartial from './_RetailProductSelector'
import RetailVideoPartial from './_RetailVideoFinancing'
import RetailCarouselPartial from './_RetailArticleCarousel'
import RetailAppHighlightPartial from './_RetailAppHighlight'
import RetailBranchesPartial from './_RetailBranchesHighlight'
import RetailClosingCTAPartial from './_RetailClosingCtaCarousel'
import RetailFeaturedPartial from './_RetailFeatured'
import Footer from '../layout/Footer'
import * as config from '../../config'

const Retail = ({ imgPath, sticky }) => {
  return (
    <>
      <Navigation sticky={sticky} />
      <RetailHeroPartial imgPath={imgPath} />
      <RetailStoryTellingPartial imgPath={imgPath} />
      <RetailAffiliatePartial imgPath={imgPath} />
      <RetailProductSelectorPartial imgPath={imgPath} />
      <RetailVideoPartial imgPath={imgPath} />
      <RetailCarouselPartial imgPath={imgPath} />
      <RetailAppHighlightPartial imgPath={imgPath} />
      <RetailBranchesPartial imgPath={imgPath} />
      <RetailClosingCTAPartial imgPath={imgPath} />
      <RetailFeaturedPartial imgPath={imgPath} />
      <Footer imgPath={imgPath} />
    </>
  )
}

export default Retail
