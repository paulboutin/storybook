import React from 'react'
import { Hero } from './Hero'
import Eyebrow from '../base/Eyebrow'

const ArticleHighlight = ({
  image,
  eyebrow = {},
  headline,
  subtext,
  text,
  href,
  tag
}) => {
  return (
    <Hero type='spaced' image={image} className='article-highlight'>
      <a href={href} className='article-highlight-container container'>
        {eyebrow.enable && <Eyebrow className='white'>{eyebrow.text}</Eyebrow>}
        <div className='article-highlight-wrapper'>
          <div className='article-highlight-tag text-sm'>{tag}</div>
          <div className='article-highlight-text-items'>
            <h3 className='text-h3 font-display'>{headline}</h3>
            <p className='article-highlight-text'>{text}</p>
          </div>
        </div>
        <div className='article-highlight-subtext'>{subtext}</div>
      </a>
    </Hero>
  )
}

export default ArticleHighlight
