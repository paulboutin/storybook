import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import Navigation from '../../../components/layout/Navigation'
import Footer from '../../../components/layout/Footer'
import CommercialHeroPartial from '../../../components/pre-render/_CommercialHero'
import CommercialDifferentiatorsPartial from '../../../components/pre-render/_CommercialDifferentiators'
import CommercialVideoPartial from '../../../components/pre-render/_CommercialVideoTreasury'
import CommercialArticlesPartial from '../../../components/pre-render/_CommercialArticleCarousel'
import CommercialIndustryPartial from '../../../components/pre-render/_CommercialIndustryCarousel'
import CommercialSolutionsLinksPartial from '../../../components/pre-render/_CommercialSolutionsLinks'
import CommercialSolutionsHighlightPartial from '../../../components/pre-render/_CommercialSolutionsHighlight'
import CommercialLeadFormPartial from '../../../components/pre-render/_CommercialLeadForm'
import CommercialClosingCTAPartial from '../../../components/pre-render/_CommercialClosingCta'

const imgPath = '/img'

export const Commercial = () => {
  const sticky = boolean('Sticky Nav', false)
  return (
    <>
      <Navigation sticky={sticky} />
      <CommercialHeroPartial imgPath={imgPath} />
      <CommercialDifferentiatorsPartial imgPath={imgPath} />
      <CommercialVideoPartial imgPath={imgPath} />
      <CommercialArticlesPartial imgPath={imgPath} />
      <CommercialIndustryPartial imgPath={imgPath} />
      <CommercialSolutionsLinksPartial imgPath={imgPath} />
      <CommercialLeadFormPartial imgPath={imgPath} />
      <CommercialSolutionsHighlightPartial imgPath={imgPath} />
      <CommercialClosingCTAPartial imgPath={imgPath} />
      <Footer />
    </>
  )
}

export default {
  title: 'Templates/LOB'
}
