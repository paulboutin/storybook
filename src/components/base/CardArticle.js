import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'
import Button from './Button'

const ArticleStandard = ({
  heading,
  subtext,
  image,
  tag,
  href,
  tagHref = '#'
}) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} ratio='16:9' />

      <div className='card-content'>
        <a className='card-tag' href={tagHref}>
          {tag}
        </a>
        <Link href={href} standalone noArrow>
          {heading}
        </Link>
        <p className='card-subtext'>{subtext}</p>
      </div>
    </>
  )
}

const ArticleTextOnly = ({ heading, href }) => {
  return (
    <div className='card-content'>
      <Link href={href} standalone>
        {heading}
      </Link>
    </div>
  )
}

const ArticleVideo = ({ heading, subtext, tag, cardId, tagHref }) => {
  return (
    <>
      <section
        className='popup-video'
        data-popup-video-src='https://player.vimeo.com/video/445351154'
        data-click-target={`#${cardId}`}
      >
        <img
          src='https://i.vimeocdn.com/video/936265353.jpg'
          alt='Popup video poster'
          className='popup-video-poster'
        />
        <div className='popup-video-overlay' />

        <div className='popup-video-content'>
          <Button type='primary' icon='play' />
        </div>
      </section>

      <div className='card-content'>
        <a className='card-tag' href={tagHref}>
          {tag}
        </a>
        <span className='link link-standalone'>{heading}</span>
        <p className='card-subtext'>{subtext}</p>
      </div>
    </>
  )
}

const Services = ({ heading, image, href }) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} ratio='3:4' />

      <div className='card-content'>
        <Link href={href} standalone noArrow>
          {heading}
        </Link>
      </div>
    </>
  )
}

const CardArticle = ({ type, heading, subtext, tag, image, href, tagHref }) => {
  const cardId = `card-${
    (Math.random() * Math.random()).toString().split('.')[1]
  }`

  const Content = () => {
    switch (type) {
      case 'standard':
        return (
          <ArticleStandard
            heading={heading}
            subtext={subtext}
            tag={tag}
            image={image}
            href={href}
            tagHref={tagHref}
          />
        )
      case 'text-only':
        return <ArticleTextOnly href={href} heading={heading} />
      case 'video':
        return (
          <ArticleVideo
            heading={heading}
            subtext={subtext}
            tag={tag}
            cardId={cardId}
            tagHref={tagHref}
          />
        )
      case 'services':
        return <Services href={href} heading={heading} image={image} />
      default:
        return null
    }
  }

  return (
    <article
      className={classNames('card-article', `card-article-${type}`)}
      {...(type === 'video' ? { id: cardId } : {})}
    >
      <Content />
    </article>
  )
}

export default CardArticle
