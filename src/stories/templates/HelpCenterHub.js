import React from 'react'
import Navigation from '../../components/layout/Navigation'
import HelpIntro from '../../components/layout/HelpIntro'
import HelpOutro from '../../components/layout/HelpOutro'
import Legal from '../../components/layout/Legal'
import Footer from '../../components/layout/Footer'

export const HelpCenterHub = () => (
  <>
    <Navigation />

    <main className='help-center-hub'>
      <HelpIntro showLinks />

      <section className='help-center-topics'>
        <div className='container'>
          <div className='help-center-topics-wrapper'>
            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Accounts
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                COVID Updates
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Resource Hub
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Online Banking
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Mobile Banking
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Disputes
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Video Tutorials
              </a>
            </div>

            <div className='help-center-topic-wrapper'>
              <a href='#' className='help-center-topic'>
                Learning Center
              </a>
            </div>
          </div>
        </div>
      </section>

      <HelpOutro />

      <Legal />

      <Footer />
    </main>
  </>
)
