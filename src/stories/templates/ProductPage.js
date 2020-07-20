import React from 'react'
import Hero from '../../components/layout/Hero'
// import ListElement from '../../components/layout/ListElement'
import Highlight from '../../components/layout/Highlight'
// import PromoElement from '../../components/layout/PromoElement'
import ColumnIcons from '../../components/layout/ColumnIcons'
import FAQ from '../../components/layout/FAQ'
// import ClosingCTA from '../../components/layout/ClosingCTA'
// import ThreeCol from '../../components/layout/3Col'

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

    <div style={placeholderStyle}>List element</div>

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

    <div style={placeholderStyle}>Promo element</div>

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

    <div style={placeholderStyle}>Closing CTA</div>

    <div style={placeholderStyle}>3 Col Cards</div>

    <footer style={placeholderStyle}>Footer</footer>
  </>
)
