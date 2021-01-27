import React from 'react'
import classNames from 'classnames'
import ClosingCTA from '../../components/layout/ClosingCTA'
import Navigation from '../../components/layout/Navigation'
import HelpIntro from '../../components/layout/HelpIntro'
import Breadcrumbs from '../../components/base/Breadcrumbs'
import Link from '../../components/base/Link'
import Legal from '../../components/layout/Legal'
import Footer from '../../components/layout/Footer'
import Accordion from '../../components/base/Accordion'
import { slugify } from '../../utils'

export const HelpCenterHub = () => {
  const topics = [
    {
      name: 'General Information',
      articles: [
        {
          title: 'Password Retrieval',
          content: (
            <>
              Access your Username by calling Online Banking Customer Support at
              1-800-488-2265, option 3 (TTY 1-800-659-5495). If you're outside
              the U.S., call 1-925-975-3202; before the "1," be sure to use any
              applicable exit code (for example, dial 00 in the UK).
              <br />
              <br />
              Reset your password on the <Link>Password Reset</Link> page.
            </>
          )
        },
        {
          title: 'Checking and Routing numbers',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa deleniti doloremque dolorum exercitationem, labore laudantium, odio rem repellat repudiandae similique sint sunt tempora tenetur ullam! A ab quisquam voluptas.'
        },
        {
          title: 'View account statements',
          content:
            'Animi assumenda atque autem consequuntur cum cumque deleniti ea facere fugit hic inventore ipsa itaque iure minima molestiae perferendis praesentium quibusdam, quod similique tempore. Aliquam doloribus incidunt laboriosam porro ullam.'
        },
        {
          title: 'Order checks',
          content:
            'Est impedit nobis, nostrum pariatur praesentium unde voluptatum. Adipisci, aliquam aliquid consequatur consequuntur corporis cumque eos eum facilis, laboriosam modi nam natus nostrum perspiciatis possimus provident quaerat qui temporibus veritatis.'
        },
        {
          title: 'Mail in a payment',
          content:
            'A accusantium adipisci assumenda dignissimos ex exercitationem facere id labore, laborum molestiae mollitia non odit officia placeat praesentium quas quasi rerum, sapiente, sequi similique soluta tempora velit voluptates! Accusamus, magnam!'
        }
      ]
    },
    {
      name: 'New Accounts',
      articles: [
        {
          title: 'Article 1',
          content:
            'At deserunt eius fugiat, fugit id nemo odit. A aliquam animi delectus, eius magnam pariatur quisquam saepe veniam! Aut dolor doloribus eum id laudantium minus nam, quasi saepe tempore velit?'
        },
        {
          title: 'Article 2',
          content:
            'Asperiores aut autem, commodi illo incidunt labore qui voluptatum. Ad assumenda at aut dolorum eum eveniet, expedita facere inventore ipsa magni neque perferendis quas quasi quibusdam quis quisquam veritatis vero.'
        },
        {
          title: 'Article 3',
          content:
            'Aliquid, aperiam, atque blanditiis cumque dolor dolorum eius error esse inventore ipsa iusto laboriosam laudantium libero maxime molestias nesciunt quaerat quibusdam quod rerum saepe sed sint voluptate voluptatem voluptates, voluptatibus!'
        }
      ]
    },
    {
      name: 'Emails and Alerts',
      articles: [
        {
          title: 'Article 4',
          content:
            'Accusamus commodi cupiditate dicta ex fugiat minus nihil odit officia sed, similique! Atque autem cum doloribus ducimus earum enim fugiat iusto, maiores molestiae nam provident quo rem, tempore vitae, voluptatibus?'
        },
        {
          title: 'Article 5',
          content:
            'Adipisci consectetur cumque delectus deserunt earum eos facere inventore magni optio praesentium quidem, soluta suscipit tempora tempore tenetur veniam voluptas. At aut consequatur, eius expedita incidunt ipsa nulla sequi sit.'
        },
        {
          title: 'Article 6',
          content:
            'Aliquam autem consequuntur dolore dolorem minus modi nesciunt perspiciatis praesentium qui quisquam, sapiente soluta tempore voluptate! A, cumque dolor, ducimus eius eveniet magni nam quod recusandae repellat repudiandae rerum suscipit.'
        }
      ]
    },
    {
      name: 'Investment Options',
      articles: [
        {
          title: 'Article 7',
          content:
            'Aliquid aperiam beatae commodi corporis cupiditate deserunt dicta distinctio fuga fugiat, id illum impedit libero nobis perspiciatis quibusdam quidem, unde ut voluptates? Cumque expedita itaque natus quibusdam sint veniam voluptatibus.'
        },
        {
          title: 'Article 8',
          content:
            'At atque delectus dolor eos esse est eum illo impedit iste laborum magni minus, molestiae nam nobis officia possimus quaerat quas quia quis ratione recusandae saepe soluta tempore totam vitae!'
        },
        {
          title: 'Article 9',
          content:
            'Deleniti ducimus ex ipsum molestiae odio quisquam reprehenderit. Architecto aut magni quasi. A asperiores aspernatur corporis delectus dolore eligendi explicabo facilis harum quam ratione sint tempore, totam veritatis, vero voluptates.'
        }
      ]
    },
    {
      name: 'Credit Cards',
      articles: [
        {
          title: 'Article 10',
          content:
            'Ab aut commodi corporis culpa, delectus ducimus earum error eveniet fugit harum id illo incidunt inventore labore magnam magni natus nisi non omnis quaerat qui quia recusandae sequi, similique tempore.'
        },
        {
          title: 'Article 11',
          content:
            'Alias aut commodi consequuntur cum distinctio dolorem, eum eveniet ex illum impedit inventore nobis optio, praesentium tempore voluptas? Delectus deserunt dolores ea ipsa magnam magni molestiae obcaecati suscipit, tempore vitae!'
        },
        {
          title: 'Article 12',
          content:
            'Blanditiis consectetur earum fuga non porro, possimus quasi quidem quos! Commodi corporis delectus doloremque neque non, pariatur reiciendis! Atque, consectetur deserunt enim eum explicabo modi molestiae mollitia quis sequi veniam!'
        }
      ]
    }
  ]

  return (
    <>
      <Navigation />

      <main className='help-center-hub'>
        <HelpIntro />

        <section className='help-center-articles'>
          <div className='container'>
            <aside className='help-center-topics'>
              {topics.map((topic, index) => (
                <Accordion
                  key={topic.name}
                  title={topic.name}
                  expanded={index === 0}
                >
                  <ul>
                    {topic.articles.map(article => (
                      <li
                        key={article.title}
                        className='help-center-article-link'
                      >
                        <span
                          className='link'
                          data-article-id={slugify(article.title)}
                        >
                          {article.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Accordion>
              ))}
            </aside>

            {topics.map((topic, topicIndex) =>
              topic.articles.map((article, articleIndex) => (
                <article
                  key={article.title}
                  id={slugify(article.title)}
                  className={classNames('help-center-article', {
                    'help-center-article-selected':
                      topicIndex === 0 && articleIndex === 0
                  })}
                >
                  <h6 className='help-center-article-heading'>
                    Accounts - {topic.name}
                  </h6>
                  <h4 className='help-center-article-title'>{article.title}</h4>
                  <p>{article.content}</p>
                </article>
              ))
            )}
          </div>
        </section>

        <ClosingCTA
          type='standard'
          title={"Haven't found what you're looking for?"}
          text='Feel free to get in touch.'
          label='Contact Us'
        />

        <Legal />

        <section className='help-center-breadcrumbs'>
          <div className='container'>
            <Breadcrumbs items={['Help Center', 'Accounts']} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default {
  title: 'Templates',
  parameters: {
    'in-dsm': {
      id: '5f6baea034518453f84a7d70'
    }
  }
}
