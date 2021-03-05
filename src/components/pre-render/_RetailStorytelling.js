import React from 'react'
import Button from '../base/Button'
import Storytelling from '../layout/Storytelling'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const items = prefix => [
  {
    title: 'Your money doesn’t just sit at a bank',
    text:
      'When you put your money in a bank, 90% of your deposits are lent out by your bank to finance things. ' +
      'Some of that money can be used to fund student loans, mortgages or community initiatives.',
    image: prefixImagePath({
      prefix,
      src: '/retail/storytelling/BOTW_Retail_Storytelling_BanksLend.png'
    })
  },
  {
    title: 'What is your bank financing?',
    text:
      'Unfortunately, many banks lend out your money to finance projects that you wouldn’t support—like those that cause climate change.' +
      ' In fact, 4 of the top US banks finance an average of $202 billion worth of fossil fuel funding.',
    image: prefixImagePath({
      prefix,
      src:
        '/retail/storytelling/BOTW_Retail_How Banks Works_WhatIsYourBankFinancing.png'
    })
  },
  {
    title: 'Here’s how we’re different',
    text:
      'We have the strongest environmental stance of any major US bank, and have policies to back up our values. ' +
      'So not only do we invest in a sustainable planet, but we’ve restricted our financing for environmentally harmful industries.',
    image: prefixImagePath({
      prefix,
      src: '/retail/storytelling/BOTW_Retail_How Banks Works_HeresHow.png'
    })
  },
  {
    title: 'Where you put your money matters',
    text:
      'Put your money where your values are. Your money supports the investments made by your bank, ' +
      'so when your bank finances a sustainable planet, you do too.',
    image: prefixImagePath({
      prefix,
      src: '/retail/storytelling/BOTW_Retail_How Banks Works_WhereYou.png'
    }),
    Content: () => (
      <Button
        type='primary'
        link
        href='https://www.bankofthewest.com/personal-banking/checking-accounts'
        label='Open an Account Today'
      />
    )
  }
]

const RetailStoryTellingPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => {
  return <Storytelling items={items(imgPath)} />
}

export default RetailStoryTellingPartial
