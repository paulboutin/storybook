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
import Link from '../../components/base/Link'
import Breadcrumbs from '../../components/base/Breadcrumbs'

const ProductPage = () => (
  <>
    <Navigation />

    <main>
      <Hero type='spaced' image='/img/trees.png' />

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
        eyebrow={{ enable: true, text: 'Bank for the planet' }}
        title='The strongest environmental stance of any major bank.'
        text="Our policies are 100% transparent because we're proud of what we finance and what we don't."
        type='A'
        image='/img/plant.png'
      >
        <Link standalone>Learn why your choice of bank matters</Link>
      </Highlight>

      <PromoElement
        heading='The strongest environmental stance of any major bank.'
        type='alt'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        eyebrow={{ enable: true, text: 'Sustainable Banking' }}
        image={{ src: '/img/butterfly.png', alt: 'Promo image' }}
      >
        <Button type='primary' label='Call to Action' link />
      </PromoElement>

      <ColumnIcons
        columns={[
          {
            icon: '/icons/img/lock-card.svg',
            title: 'Debit card? Yes!',
            text: 'Use it anywhere that accepts a Mastercard debit card.'
          },
          {
            icon: '/icons/img/cc-options.svg',
            title: 'Overdraft protection? Yes!',
            text:
              'We can all lose track of our spending. Check out our overdraft programs.'
          },
          {
            icon: '/icons/img/card-services.svg',
            title: 'Mobile wallet? Yes!',
            text: 'Use it anywhere that accepts a Mastercard debit card.'
          }
        ]}
      />

      <FAQ />

      <ClosingCTA type='standard' image='/img/trees.png' />

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
            image={{ src: '/img/trees.png', alt: 'image' }}
            heading={item.heading}
            linkText='View all'
          >
            {item.text}
          </Card>
        ))}
      </ColumnCards>

      <Legal />

      <div className='container'>
        <Breadcrumbs items={['Home', 'Checking', 'Any Deposit Checking']} />
      </div>
    </main>

    <Footer />
  </>
)

export default ProductPage
