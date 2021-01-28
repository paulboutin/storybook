import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'

const ArticleStandard = ({ heading, subtext, image, tag }) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} ratio='2:1' />
      <div className='card-content'>
        <span className='card-tag'>{tag}</span>
        <Link standalone noArrow>
          {heading}
        </Link>
        <p className='card-subtext'>{subtext}</p>
      </div>
    </>
  )
}

const ArticleTextOnly = ({ heading }) => {
  return (
    <>
      <div className='card-content'>
        <Link standalone>{heading}</Link>
      </div>
    </>
  )
}

const Services = ({ heading, image }) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} ratio='auto' />
      <div className='card-content'>
        <Link standalone noArrow>
          {heading}
        </Link>
      </div>
    </>
  )
}

const CardNew = ({ type, heading, subtext, tag, image }) => {
  const Content = () => {
    switch (type) {
      case 'standard':
        return (
          <ArticleStandard
            heading={heading}
            subtext={subtext}
            tag={tag}
            image={image}
          />
        )
      case 'text-only':
        return <ArticleTextOnly heading={heading} />
      case 'services':
        return <Services heading={heading} image={image} />
      default:
        return null
    }
  }

  return (
    <article className={classNames('card-new', `card-new-${type}`)}>
      <Content />
    </article>
  )
}

export default CardNew
