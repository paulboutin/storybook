import React from 'react'
import ClosingCTA from '../../components/layout/ClosingCTA'
import Navigation from '../../components/layout/Navigation'
import HelpIntro from '../../components/layout/HelpIntro'
import Legal from '../../components/layout/Legal'
import Footer from '../../components/layout/Footer'
import Breadcrumbs from '../../components/base/Breadcrumbs'

export const HelpCenter = () => {
  const topic = {
    icon: '/icons/img/card-services.svg',
    title: 'Accounts',
    description: 'Find answers to frequently asked questions grouped by topic'
  }

  const topics = new Array(6).fill(topic)

  return (
    <>
      <Navigation />

      <main className='help-center'>
        <HelpIntro showLinks />

        <section className='help-center-topics'>
          <div className='container'>
            <div className='help-center-topics-wrapper'>
              {topics.map((topic, index) => (
                <div key={index} className='help-center-topic-wrapper'>
                  <a href='#'>
                    <article className='help-center-topic'>
                      <div className='help-center-topic-circle'>
                        <img src={topic.icon} alt={topic.title} />
                      </div>
                      <h5 className='help-center-topic-title'>{topic.title}</h5>
                      <p>{topic.description}</p>
                    </article>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ClosingCTA
          type='standard'
          title={"Haven't found what you're looking for?"}
          text='Feel free to get in touch.'
          label='Contact Us'
        />

        <Legal />

        <div className='container'>
          <Breadcrumbs items={['Help Center', 'Accounts']} />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default {
  title: 'Templates',
  parameters: {
    'in-dsm': {
      id: '5f6bae76c555192fd50673aa'
    }
  }
}
