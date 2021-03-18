import React from 'react'
import Navigation from '../layout/Navigation'
import CommercialHeroPartial from './_CommercialHero'
import CommercialDifferentiatorsPartial from './_CommercialDifferentiators'
import CommercialInfographicPartial from './_CommercialInfographic'
import CommercialVideoPartial from './_CommercialVideoTreasury'
import CommercialArticlesPartial from './_CommercialArticleCarousel'
import CommercialIndustryPartial from './_CommercialIndustryCarousel'
import CommercialSolutionsLinksPartial from './_CommercialSolutionsLinks'
import CommercialLeadFormPartial from './_CommercialLeadForm'
import CommercialSolutionsHighlightPartial from './_CommercialSolutionsHighlight'
import CommercialClosingCTAPartial from './_CommercialClosingCta'
import Footer from '../layout/Footer'

const Commercial = ({ imgPath, sticky }) => {
  return (
    <>
      <Navigation
        sticky={sticky}
        imgPath={imgPath}
        currentCategory='commercial'
      />
      <CommercialHeroPartial imgPath={imgPath} />
      <CommercialDifferentiatorsPartial imgPath={imgPath} />
      <CommercialInfographicPartial imgPath={imgPath} />
      <CommercialVideoPartial imgPath={imgPath} />
      <CommercialArticlesPartial imgPath={imgPath} />
      <CommercialIndustryPartial imgPath={imgPath} />
      <CommercialSolutionsLinksPartial imgPath={imgPath} />
      <CommercialLeadFormPartial imgPath={imgPath} />
      <CommercialSolutionsHighlightPartial imgPath={imgPath} />
      <CommercialClosingCTAPartial imgPath={imgPath} />
      <Footer imgPath={imgPath} />
    </>
  )
}

export default Commercial
