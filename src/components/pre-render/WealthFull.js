import React from 'react'
import Navigation from '../layout/Navigation'
import WealthHeroPartial from './_WealthHero'
import WealthDifferentiatorsPartial from './_WealthDifferentiators'
import WealthExpertsHeroPartial from './_WealthExperts'
import WealthArticleHighlightPartial from './_WealthHighlightArticle'
import WealthCarouselPartial from './_WealthArticleCarousel'
import WealthAppPartial from './_WealthApp'
import WealthExpertiseCarouselPartial from './_WealthExpertiseCarousel'
import WealthResourceLinksPartial from './_WealthSolutionsLinks'
import WealthClosingCTAPartial from './_WealthClosingCta'
import Footer from '../layout/Footer'

const WealthFull = ({ imgPath, sticky }) => {
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

export default WealthFull
