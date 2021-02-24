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

const ArticleVideo = ({
  src = 'https://player.vimeo.com/video/445351154',
  poster = 'https://i.vimeocdn.com/video/936265353.jpg',
  posterAlt = 'Popup video poster',
  heading,
  subtext,
  tag,
  cardId,
  tagHref
}) => {
  return (
    <>
      <section
        className='popup-video'
        data-popup-video-src={src}
        data-click-target={`#${cardId}`}
      >
        <img src={poster} alt={posterAlt} className='popup-video-poster' />
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

const CardArticle = ({ type, ...props }) => {
  const cardId = `card-${
    (Math.random() * Math.random()).toString().split('.')[1]
  }`

  const Content = () => {
    switch (type) {
      case 'standard':
        return <ArticleStandard {...props} />
      case 'text-only':
        return <ArticleTextOnly {...props} />
      case 'video':
        return <ArticleVideo cardId={cardId} {...props} />
      case 'services':
        return <Services {...props} />
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
