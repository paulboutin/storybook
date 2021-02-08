import React from 'react'
import classNames from 'classnames'
import Image from './Image'
import Link from './Link'
import Button from './Button'

const ArticleStandard = ({ heading, subtext, image, tag }) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} ratio='16:9' />

      <div className='card-content'>
        <a className='card-tag' href='#'>
          {tag}
        </a>
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
    <div className='card-content'>
      <Link standalone>{heading}</Link>
    </div>
  )
}

const ArticleVideo = ({ heading, subtext, tag }) => {
  return (
    <>
      <section
        className='popup-video'
        data-popup-video-src='https://player.vimeo.com/video/445351154'
        data-click-target='.popup-video-content'
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
        <a className='card-tag' href='#'>
          {tag}
        </a>
        <Link standalone noArrow>
          {heading}
        </Link>
        <p className='card-subtext'>{subtext}</p>
      </div>
    </>
  )
}

const Services = ({ heading, image }) => {
  return (
    <>
      <Image src={image.src} alt={image.alt} ratio='3:4' />

      <div className='card-content'>
        <Link standalone noArrow>
          {heading}
        </Link>
      </div>
    </>
  )
}

const CardArticle = ({ type, heading, subtext, tag, image }) => {
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
      case 'video':
        return <ArticleVideo heading={heading} subtext={subtext} tag={tag} />
      case 'services':
        return <Services heading={heading} image={image} />
      default:
        return null
    }
  }

  return (
    <article className={classNames('card-article', `card-article-${type}`)}>
      <Content />
    </article>
  )
}

export default CardArticle
