import React from 'react'
import Accordion from '../base/Accordion'
import Link from '../base/Link'
import AppCTA from '../base/AppCTA'
import { prefixImagePath } from '../../utils'

const Footer = ({ imgPath = '/img' }) => (
  <footer className='footer'>
    <section className='footer-links-mobile visible-xs'>
      <img
        src={prefixImagePath({
          prefix: imgPath,
          src: 'star-birds-white.svg'
        })}
        alt='Starbirds'
        className='footer-starbirds'
      />

      <Accordion title='Get to know us' inverted>
        <Link>About Us</Link>
        <Link>Press</Link>
        <Link>Careers</Link>
        <Link>Diversity & Inclusion</Link>
        <Link>Security</Link>
        <Link>[+] Feedback</Link>
      </Accordion>

      <Accordion title='Support' inverted>
        <Link>FAQs</Link>
        <Link>Customer service</Link>
        <Link>Find an advisor</Link>
        <Link>Branch Locator</Link>
      </Accordion>

      <Accordion title='Products' inverted>
        <Link>Checking</Link>
        <Link>Savings</Link>
        <Link>Credit Cards</Link>
        <Link>Loans</Link>
        <Link>Mortgages</Link>
      </Accordion>

      <Accordion title='Download the App' inverted>
        <AppCTA />
      </Accordion>
    </section>

    <section className='footer-links hidden-xs'>
      <div className='container'>
        <div className='row'>
          <div className='footer-column col-sm-6 col-sm-offset-1 col-md-3 col-md-offset-0'>
            <h6 className='footer-column-title'>About us</h6>
            <Link>What we believe</Link>
            <Link>Press Center</Link>
            <Link>Careers</Link>
            <Link>Diversity & Inclusion</Link>
            <Link>Security</Link>
            <Link>Feedback</Link>
          </div>

          <div className='footer-column col-sm-5 col-md-3'>
            <h6 className='footer-column-title'>Need help?</h6>
            <Link>FAQs</Link>
            <Link>Customer service</Link>
            <Link>Find an advisor</Link>
            <Link>Branch Locator</Link>
          </div>

          <div className='footer-column col-sm-6 col-sm-offset-1 col-md-3 col-md-offset-0'>
            <h6 className='footer-column-title'>Products & Services</h6>
            <Link>Checking</Link>
            <Link>Savings</Link>
            <Link>Credit Cards</Link>
            <Link>Loans</Link>
            <Link>Mortgages</Link>
          </div>

          <div className='footer-column col-sm-5 col-md-3'>
            <h6 className='footer-column-title'>Download the app</h6>
            <AppCTA imgPath={imgPath} />
          </div>
        </div>
      </div>
    </section>

    <section className='footer-bottom'>
      <div className='container'>
        <div className='footer-social'>
          <a href='#'>
            <i className='icon icon-facebook' />
          </a>
          <a href='#'>
            <i className='icon icon-instagram' />
          </a>
          <a href='#'>
            <i className='icon icon-linkedin' />
          </a>
          <a href='#'>
            <i className='icon icon-twitter' />
          </a>
          <a href='#'>
            <i className='icon icon-youtube' />
          </a>
          <a href='#'>
            <i className='icon icon-help' />
          </a>
        </div>

        <div>
          <Link>Terms of Use</Link>
          <span className='footer-dot' />
          <Link>Security</Link>
          <span className='footer-dot' />
          <Link>Privacy</Link>
        </div>

        <p>
          © 2020 Bank of the West | NMLS# 19116 | Member FDIC | Equal Housing
          Lender
        </p>

        <p>Doing business in South Dakota as Bank of the West California</p>
      </div>
    </section>
  </footer>
)

export default Footer
