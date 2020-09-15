import React from 'react'
import { ComparisonCards } from '../../components/layout/Comparison'
import FAQ from '../../components/layout/FAQ'
import Footer from '../../components/layout/Footer'
import Hero from '../../components/layout/Hero'
import Legal from '../../components/layout/Legal'
import Navigation from '../../components/layout/Navigation'
import PromoElement from '../../components/layout/PromoElement'
import Button from '../../components/base/Button'

export const ComparisonPage = () => (
  <>
    <Navigation />

    <Hero type='Full' image='http://via.placeholder.com/1600' />

    <ComparisonCards />

    <PromoElement
      heading='The strongest environmental stance of any major bank.'
      type='Accent Dark'
      text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      eyebrow='Sustainable Banking'
      image={{ src: 'http://via.placeholder.com/480x640', alt: 'Promo image' }}
    >
      <Button type='tertiary' label='Call to Action' link />
    </PromoElement>

    <FAQ />

    <Legal />

    <Footer />
  </>
)
