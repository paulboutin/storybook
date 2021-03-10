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

    <section className='footer-legal'>
      <div className='container'>
        <hr />

        <p className='text-base font-bold'>Legal information and Disclosures</p>

        <p className='text-xs'>
          Deposit and loan products offered by Bank of the West, Member FDIC.
        </p>

        <p className='text-xs'>
          Wireless carriers may charge fees for text transmissions or data
          usage. Message frequency depends on account settings. Text HELP to
          BKWST for help. Availability of Mobile Banking may be affected by your
          mobile device's coverage area.
        </p>

        <p className='text-xs'>
          Securities and variable annuities are offered through BancWest
          Investment Services, a registered broker/dealer, member FINRA/SIPC,
          and SEC Registered Investment Adviser. Financial Advisors are
          Registered Representatives of BancWest Investment Services. Fixed
          annuities/insurance products are offered through BancWest Insurance
          Agency in California, (License #0C52321) and through BancWest
          Investment Services, Inc. in all other states where it is licensed to
          do business. This is not an offer or solicitation in any jurisdiction
          where we are not authorized to do business. Bank of the West and its
          various affiliates and subsidiaries are not tax or legal advisors.
        </p>

        <p className='text-xs'>
          BancWest Investment Services is a wholly owned subsidiary of Bank of
          the West. Bank of the West is a wholly owned subsidiary of BNP
          Paribas.
        </p>

        <p className='text-base font-bold'>Investment and Insurance Products</p>

        <div className='footer-products'>
          <p className='footer-product'>Not FDIC Insured</p>
          <p className='footer-product'>Not Bank Guaranteed</p>
          <p className='footer-product'>May Lose Value</p>
          <p className='footer-product'>Not a Deposit</p>
          <p className='footer-product'>
            Not Insured by any Federal Government Agency
          </p>
        </div>
      </div>
    </section>
  </footer>
)

export default Footer
