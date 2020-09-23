import React from 'react'
import Image from '../base/Image'
import Link from '../base/Link'

const CardsHorizontalList = () => {
  const cards = [
    {
      title: 'Personal Checking',
      text:
        'Convenience, flexibility and value for your day to day banking needs.'
    },
    {
      title: 'Savings Accounts',
      text: 'We can help put extra funds to work earning interest.'
    },
    {
      title: 'Credit Cards',
      text: 'Discover credit cards that can help you manage your cash flow.'
    },
    {
      title: 'Loans and Mortgages',
      text: 'We offer loans, financing, and flexible financing lines of credit.'
    },
    {
      title: 'Personal Investing',
      text: 'Invest in the future you want, the way you want.'
    }
  ]

  return (
    <section className='cards-horizontal-list container'>
      <h3 className='cards-horizontal-list-heading'>
        Solutions that finance a better tomorrow
      </h3>

      {cards.map((card, index) => (
        <article key={index} className='article-card'>
          <Image
            src='http://via.placeholder.com/640'
            alt='Article image'
            className='article-card-image'
          />

          <div className='article-card-content'>
            <h4 className='article-title'>{card.title}</h4>
            <p>{card.text}</p>
            <Link standalone>Learn more</Link>
          </div>
        </article>
      ))}
    </section>
  )
}

export default CardsHorizontalList
