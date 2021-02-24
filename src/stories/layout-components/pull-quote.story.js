import React from 'react'
import PullQuote from '../../components/layout/PullQuote'

export const PullQuoteStory = () => (
  <PullQuote
    items={[
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/nandita-bakhshi.png',
        quote:
          'Life isn’t stopping, neither are we. We understand the important role that we play in people’s lives.',
        author: {
          name: 'Nandita Bakhshi',
          role: 'President and Chief Executive Officer'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/xavier-antiglio.png',
        quote:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ducimus.',
        author: {
          name: 'Xavier Antiglio',
          role: 'Chief Financial Officer'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/ryan-bailey.png',
        quote:
          'Dolore magnam mollitia non saepe sequi sit. Animi assumenda distinctio dolorem earum.',
        author: {
          name: 'Ryan Bailey',
          role: 'Head of Consumer Banking Group'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/tracy-brock.png',
        quote:
          'Ad adipisci animi maxime. Accusantium animi, cum dignissimos dolorem fugit iusto labore mollitia.',
        author: {
          name: 'Tracy Brock',
          role: 'Chief Compliance Officer'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/michelle-di-gangi.png',
        quote:
          'Ab alias at eaque quibusdam recusandae tempore veniam. Adipisci architecto at corporis.',
        author: {
          name: 'Michelle Di Gangi',
          role: 'Head of Small Business & Medium Enterprise'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/raj-gopal.png',
        quote:
          'Blanditiis ducimus ipsum laboriosam quam ratione! Est maxime saepe unde!',
        author: {
          name: 'Raj Gopal',
          role: 'Chief Risk Officer'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/hans-vanbets.png',
        quote:
          'Assumenda blanditiis culpa, dicta eos, et fugiat ipsa iste magnam molestiae natus.',
        author: {
          name: 'Hans Vanbets',
          role: 'Chief HR Officer'
        }
      },
      {
        image:
          'https://www.bankofthewest.com/-/media/Images-responsive/about-us/leadership/Michael-pereira.png',
        quote:
          'Ad alias architecto atque autem beatae distinctio dolore doloremque dolores enim error.',
        author: {
          name: 'Michael Pereira',
          role: 'Chief Strategy Officer'
        }
      }
    ]}
  />
)

PullQuoteStory.story = {
  name: 'Pull Quote'
}

export default {
  title: 'Layout Components',
  parameters: {
    'in-dsm': {
      id: '5f29d798b0d2de1f1c7d82e5'
    }
  }
}
