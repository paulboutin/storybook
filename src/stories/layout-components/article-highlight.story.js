import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import ArticleHighlight from '../../components/layout/ArticleHighlight'

const defaultImage = '/img/wealth/BOTW_Wealth_Highlight-article.jpg'
const defaultEyebrow = 'Eyebrow'
const defaultTag = 'Tag'
const defaultTitle = 'Heading'
const defaultText = 'Lorem ipsum'
const defaultSubtext = 'Subtext'

export const Standard = () => {
  const enableEyebrow = boolean('Eyebrow Enable', true)
  const eyebrow = text('Eyebrow Text', defaultEyebrow)
  const image = text('Image', defaultImage)
  const tag = text('Tag', defaultTag)
  const headline = text('Headline', defaultTitle)
  const textContent = text('Text', defaultText)
  const subtext = text('Subtext', defaultSubtext)

  return (
    <ArticleHighlight
      href='#'
      eyebrow={{ enable: enableEyebrow, text: eyebrow }}
      image={image}
      tag={tag}
      headline={headline}
      text={textContent}
      subtext={subtext}
    />
  )
}

export default {
  title: 'Layout Components/Article Highlight'
}
