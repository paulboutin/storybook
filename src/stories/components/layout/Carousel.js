import React from 'react'
import Carousel from '../../../components/layout/Carousel'

export const CarouselStory = () => (
  <Carousel
    items={[
      {
        image: 'http://via.placeholder.com/640/eee',
        title: 'Investment Services',
        text:
          'Investing doesn’t have to be so complicated. Start on your own terms.'
      },
      {
        image: 'http://via.placeholder.com/640/ddd',
        title: 'Checking Accounts',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      {
        image: 'http://via.placeholder.com/640/ccc',
        title: 'Savings Accounts',
        text:
          'A alias atque consectetur doloremque ea eligendi eveniet explicabo id.'
      },
      {
        image: 'http://via.placeholder.com/640/bbb',
        title: 'Certificates of Deposit',
        text: 'Amet asperiores atque aut beatae consequuntur delectus dicta.'
      },
      {
        image: 'http://via.placeholder.com/640/aaa/ccc',
        title: 'Investment Services',
        text:
          'Autem corporis culpa dolor eius est facilis harum maxime minima necessitatibus nemo.'
      },
      {
        image: 'http://via.placeholder.com/640/999/ccc',
        title: 'Checking Accounts',
        text: 'Atque harum id magnam mollitia nostrum!'
      },
      {
        image: 'http://via.placeholder.com/640/888/ccc',
        title: 'Savings Accounts',
        text:
          'Assumenda beatae excepturi ipsam ipsum maiores minima nemo numquam.'
      },
      {
        image: 'http://via.placeholder.com/640/777/ccc',
        title: 'Certificates of Deposit',
        text: 'Ad corporis delectus ea est, fugit modi mollitia neque nisi.'
      }
    ]}
  />
)

CarouselStory.story = {
  name: 'Carousel'
}
