import React from 'react'
import Button from '../../components/base/Button'
import Card from '../../components/base/Card'
import ClosingCTA from '../../components/layout/ClosingCTA'
import ColumnCards from '../../components/layout/ColumnCards'
import ColumnIcons from '../../components/layout/ColumnIcons'
import FAQ from '../../components/layout/FAQ'
import Footer from '../../components/layout/Footer'
import Hero from '../../components/layout/Hero'
import Highlight from '../../components/layout/Highlight'
import Legal from '../../components/layout/Legal'
import ListElement from '../../components/layout/ListElement'
import Navigation from '../../components/layout/Navigation'
import PromoElement from '../../components/layout/PromoElement'

export const ProductPage = () => (
  <>
    <Navigation />

    <main>
      <Hero type='Spaced' image='http://via.placeholder.com/1600' />

      <ListElement
        headerText={{
          eyebrow: 'Sustainable Banking',
          heading: 'Find a checking account that’s right for you.',
          text:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        }}
        items={[
          '$0 monthly service charge with any deposit per statement',
          'No minimum balance',
          'No direct deposit required',
          'No fees on checks, money orders, incoming wires, or ATM withdrawals worldwide',
          'Relationship based service and special rates on CDs and Money Market accounts',
          'Save on consumer loans with interest rate discounts'
        ]}
      />

      <Highlight
        position='right'
        type='Overlap'
        overlap='Image'
        images={[
          'http://via.placeholder.com/640',
          'http://via.placeholder.com/640'
        ]}
      />

      <Highlight
        position='left'
        type='Overlap'
        overlap='Image'
        images={[
          'http://via.placeholder.com/640',
          'http://via.placeholder.com/640'
        ]}
      />

      <PromoElement
        heading='The strongest environmental stance of any major bank.'
        type='Accent Square'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        eyebrow='Sustainable Banking'
        image={{ src: 'http://via.placeholder.com/640', alt: 'Promo image' }}
      >
        <Button type='tertiary' label='Call to Action' link />
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

      <ClosingCTA type='2col' image='http://via.placeholder.com/1600x1000' />

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
            image={{ src: 'http://via.placeholder.com/640', alt: 'image' }}
            heading={item.heading}
            linkText='View all'
          >
            {item.text}
          </Card>
        ))}
      </ColumnCards>

      <Legal />
    </main>

    <Footer />
  </>
)
