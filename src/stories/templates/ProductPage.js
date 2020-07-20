import React from 'react'
import Card from '../../components/base/Card'
import ClosingCTA from '../../components/layout/ClosingCTA'
import ColumnCards from '../../components/layout/ColumnCards'
import ColumnIcons from '../../components/layout/ColumnIcons'
import FAQ from '../../components/layout/FAQ'
import Hero from '../../components/layout/Hero'
import Highlight from '../../components/layout/Highlight'
import ListElement from '../../components/layout/ListElement/ListElement'
import ListElementItems from '../../components/layout/ListElement/ListElementItems'
import PromoElement from '../../components/layout/PromoElement/PromoElement'

const placeholderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed grey',
  color: 'grey',
  backgroundColor: 'whitesmoke',
  height: 100
}

export const ProductPage = () => (
  <>
    <header style={placeholderStyle}>Header</header>

    <Hero type='Spaced' image='http://via.placeholder.com/1600' />

    <ListElement
      headerText={{
        eyebrow: 'Sustainable Banking',
        heading: 'Find a checking account that’s right for you.',
        text:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      }}
    >
      <ListElementItems
        items={[
          '$0 monthly service charge with any deposit per statement',
          'No minimum balance',
          'No direct deposit required',
          'No fees on checks, money orders, incoming wires, or ATM withdrawals worldwide',
          'Relationship based service and special rates on CDs and Money Market accounts',
          'Save on consumer loans with interest rate discounts'
        ]}
      />
    </ListElement>

    <Highlight
      contentPosition='Right'
      type='Overlap'
      overlap='Image'
      images={[
        'http://via.placeholder.com/640',
        'http://via.placeholder.com/640'
      ]}
    />

    <Highlight
      contentPosition='Left'
      type='Overlap'
      overlap='Image'
      images={[
        'http://via.placeholder.com/640',
        'http://via.placeholder.com/640'
      ]}
    />

    <PromoElement
      heading='The strongest environmental stance of any major bank.'
      type='accent'
      text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      eyebrow='Sustainable Banking'
    >
      <button className='button button-tertiary'>Call to Action</button>
    </PromoElement>

    <ColumnIcons
      columns={[
        {
          image: 'http://via.placeholder.com/256',
          text: 'Debit card? Yes!',
          subtext: 'Use it anywhere that accepts a Mastercard debit card.'
        },
        {
          image: 'http://via.placeholder.com/256',
          text: 'Overdraft protection? Yes!',
          subtext:
            'We can all lose track of our spending. Check out our overdraft programs.'
        },
        {
          image: 'http://via.placeholder.com/256',
          text: 'Mobile wallet? Yes!',
          subtext: 'Use it anywhere that accepts a Mastercard debit card.'
        }
      ]}
    />

    <FAQ />

    <ClosingCTA type='half' heading='Open online in about 10 minutes'>
      <a className='button button-tertiary' href='#'>
        Call to Action
      </a>
    </ClosingCTA>

    <ColumnCards heading='Three more reasons to love your account'>
      {[
        {
          heading: 'Online banking',
          text:
            'Manage your finances on your own time. Bank online as you would at a branch.'
        },
        {
          heading: 'Zelle',
          text:
            'Zelle lets you send or request money to anyone, regardless of their U.S. bank.'
        },
        {
          heading: 'Bill pay',
          text:
            'Pay your bills online, and avoid late fees when you automate your payments.'
        }
      ].map((item, index) => (
        <Card
          key={index}
          imageSrc='http://via.placeholder.com/500x250'
          heading={item.heading}
          linkText='View all'
          flat
        >
          {item.text}
        </Card>
      ))}
    </ColumnCards>

    <footer style={placeholderStyle}>Footer</footer>
  </>
)
