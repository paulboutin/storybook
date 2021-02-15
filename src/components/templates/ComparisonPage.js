import React from 'react'
import Navigation from '../layout/Navigation'
import Hero from '../layout/Hero'
import { ComparisonCards } from '../layout/Comparison'
import PromoElement from '../layout/PromoElement'
import Button from '../base/Button'
import FAQ from '../layout/FAQ'
import Legal from '../layout/Legal'
import Breadcrumbs from '../base/Breadcrumbs'
import Footer from '../layout/Footer'

const ComparisonPage = () => (
  <>
    <Navigation />

    <main>
      <Hero type='full' image='/img/trees.png' />

      <ComparisonCards />

      <PromoElement
        heading='The strongest environmental stance of any major bank.'
        type='accent dark'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        eyebrow='Sustainable Banking'
        image={{
          src: '/img/butterfly.png',
          alt: 'Promo image'
        }}
      >
        <Button type='secondary' label='Call to Action' link />
      </PromoElement>

      <FAQ />

      <Legal />

      <div className='container'>
        <Breadcrumbs
          items={['Home', 'Checking', 'Any Deposit Checking', 'Comparison']}
        />
      </div>
    </main>

    <Footer />
  </>
)

export default ComparisonPage
