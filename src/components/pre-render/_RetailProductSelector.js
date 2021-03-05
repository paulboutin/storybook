import React from 'react'
import ProductSelector from '../layout/ProductSelector'
import { prefixImagePath } from '../../utils'
import * as config from '../../config'

const items = prefix => [
  {
    tab: 'Checking',
    title: '1% for the Planet Checking',
    text:
      '$0 monthly fee with no minimum balance and helps fight climate change.',
    button: {
      text: 'Apply Now',
      href:
        'https://www.bankofthewest.com/personal-banking/checking-accounts/one-percent-checking'
    },
    cta: {
      text: 'Compare Checking Accounts',
      href: 'https://www.bankofthewest.com/personal-banking/checking-accounts'
    },
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Products_1Percent.png'
    })
  },
  {
    tab: 'Savings',
    title: 'Money Market Savings',
    text: 'Earn higher interest rates and start saving today.',
    button: {
      text: 'Apply Now',
      href:
        'https://www.bankofthewest.com/personal-banking/savings-accounts/choice-money-market-savings'
    },
    cta: {
      text: 'View All Savings',
      href: 'https://www.bankofthewest.com/personal-banking/savings-accounts'
    },
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Products_Savings.png'
    })
  },
  {
    tab: 'Credit Cards',
    title: 'Cash Back Mastercard',
    text: 'Get 3% cash back on dining, gas, and grocery purchases.',
    button: {
      text: 'Apply Now',
      href:
        'https://www.bankofthewest.com/personal-banking/credit-cards/cash-back-credit-card'
    },
    cta: {
      text: 'Compare Credit Cards',
      href: 'https://www.bankofthewest.com/personal-banking/credit-cards'
    },
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Products_CreditCard.png'
    })
  },
  {
    tab: 'Personal Loans',
    title: 'Car Loans',
    text:
      'Take advantage of our competitive rates and flexible terms for your car financing.',
    button: {
      text: 'Apply Now',
      href: 'https://www.bankofthewest.com/personal-banking/loans/car-loans'
    },
    cta: {
      text: 'View All Loans',
      href:
        'https://www.bankofthewest.com/personal-banking/loans/personal-loans'
    },
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Products_CarLoan.png'
    })
  },
  {
    tab: 'Home Loans',
    title: 'Home Equity Line of Credit',
    text: 'Put your home to work with a home equity line of credit.',
    button: {
      text: 'Apply Now',
      href: 'https://www.bankofthewest.com/personal-banking/loans/home-equity'
    },
    cta: {
      text: 'View All Loans',
      href: 'https://www.bankofthewest.com/personal-banking/loans/home-equity'
    },
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Products_HomeEquity.png'
    })
  },
  {
    tab: 'Online Investing',
    title: 'Start Investing Online',
    text:
      'Use our intuitive trading tools and take a hands-on approach with investing.',
    button: {
      text: 'Apply Now',
      href: 'https://invest.bankofthewest.com/Modules/NewAccount/newAccount.php'
    },
    cta: {
      text: 'Learn More About Online Investing',
      href:
        'https://www.bankofthewest.com/wealth-management/our-solutions/online-investing'
    },
    image: prefixImagePath({
      prefix,
      src: '/retail/BOTW_Retail_Products_OnlineInvesting.png'
    })
  }
]

const RetailProductSelectorPartial = ({
  imgPath = config.PRERENDER_IMAGE_PATH
}) => <ProductSelector headline='Our Products' items={items(imgPath)} />

export default RetailProductSelectorPartial
