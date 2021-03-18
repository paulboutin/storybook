import React from 'react'
import Button from '../base/Button'
import Eyebrow from '../base/Eyebrow'
import Image from '../base/Image'
import Input from '../base/Input'

const SearchBox = ({ placeholder, action, method }) => {
  return (
    <form className='search-hero-search-block' action={action} method={method}>
      <Input
        variant='outline'
        placeholder={placeholder}
        noHelperSpacing
        required
      />
      <Button type='primary' label='Search' />
    </form>
  )
}

const SearchHero = ({ eyebrow = {}, title, text, placeholder, background }) => {
  return (
    <section className='search-hero'>
      <div className='search-hero-wrapper'>
        <Image className='search-hero-image container' src={background} />
        <article className='search-hero-card'>
          {eyebrow.enable && <Eyebrow>{eyebrow.text}</Eyebrow>}
          <p className='text-h2 font-display'>{title}</p>
          <p>{text}</p>
          <SearchBox placeholder={placeholder} />
        </article>
      </div>
    </section>
  )
}

export default SearchHero
