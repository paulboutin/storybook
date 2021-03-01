import React from 'react'
import ArticleHighlight from '../layout/ArticleHighlight'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const ArticleHighlightPartial = ({ imgPath = config.PRERENDER_IMAGE_PATH }) => (
  <ArticleHighlight
    image={prefixImagePath({
      prefix: imgPath,
      src: '/img/wealth/BOTW_Wealth_Highlight-article.jpg'
    })}
    tag='Living'
    eyebrow={{ enable: true, text: 'STAY IN THE KNOW' }}
    href='https://meansandmatters.bankofthewest.com/article/living/women-take-the-lead-in-impact-investing'
    headline='Women take the lead in impact investing'
    text='Over the last few years, I’ve noticed two exciting trends in the finance industry.'
    subtext='2 minutes read'
  />
)

export default ArticleHighlight
