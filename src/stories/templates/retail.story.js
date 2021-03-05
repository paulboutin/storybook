import React from 'react'
import Navigation from '../../components/layout/Navigation'
import RetailHeroPartial from '../../components/pre-render/_RetailHero'
import RetailStoryTellingPartial from '../../components/pre-render/_RetailStorytelling'
import RetailAffiliatePartial from '../../components/pre-render/_RetailAffiliate'
import RetailProductSelectorPartial from '../../components/pre-render/_RetailProductSelector'
import RetailVideoPartial from '../../components/pre-render/_RetailVideoFinancing'
import RetailCarouselPartial from '../../components/pre-render/_RetailArticleCarousel'
import RetailAppHighlightPartial from '../../components/pre-render/_RetailAppHighlight'
import RetailBranchesPartial from '../../components/pre-render/_RetailBranchesHighlight'
import RetailClosingCTAPartial from '../../components/pre-render/_RetailClosingCtaCarousel'
import RetailFeaturedPartial from '../../components/pre-render/_RetailFeatured'
import Footer from '../../components/layout/Footer'

const imgPath = '/img'

export const Retail = () => {
  return (
    <>
      <Navigation />
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
      <Footer />
    </>
  )
}

export default {
  title: 'Templates/LOB'
}
