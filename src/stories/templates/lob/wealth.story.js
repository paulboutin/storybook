import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import Navigation from '../../../components/layout/Navigation'
import Footer from '../../../components/layout/Footer'
import WealthHeroPartial from '../../../components/pre-render/_WealthHero'
import WealthExpertsHeroPartial from '../../../components/pre-render/_WealthExperts'
import WealthArticleHighlightPartial from '../../../components/pre-render/_WealthHighlightArticle'
import WealthCarouselPartial from '../../../components/pre-render/_WealthArticleCarousel'
import WealthExpertiseCarouselPartial from '../../../components/pre-render/_WealthExpertiseCarousel'
import WealthResourceLinksPartial from '../../../components/pre-render/_WealthSolutionsLinks'
import WealthClosingCTAPartial from '../../../components/pre-render/_WealthClosingCta'
import WealthAppPartial from '../../../components/pre-render/_WealthApp'
import WealthDifferentiatorsPartial from '../../../components/pre-render/_WealthDifferentiators'

const imgPath = '/img'

export const Wealth = () => {
  const sticky = boolean('Sticky Nav', false)
  return (
    <>
      <Navigation sticky={sticky} />
      <WealthHeroPartial imgPath={imgPath} />
      <WealthDifferentiatorsPartial imgPath={imgPath} />
      <WealthExpertsHeroPartial imgPath={imgPath} />
      <WealthArticleHighlightPartial imgPath={imgPath} />
      <WealthCarouselPartial imgPath={imgPath} />
      <WealthAppPartial imgPath={imgPath} />
      <WealthExpertiseCarouselPartial imgPath={imgPath} />
      <WealthResourceLinksPartial imgPath={imgPath} />
      <WealthClosingCTAPartial imgPath={imgPath} />
      <Footer />
    </>
  )
}

export default {
  title: 'Templates/LOB'
}
