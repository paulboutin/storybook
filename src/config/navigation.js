import React from 'react'
import Button from '../components/base/Button'
import { NavigationPromo } from '../components/layout/Navigation'

const navigation = {
  categories: [
    {
      name: 'Personal',
      id: 'personal',
      products: [
        {
          id: 'checking',
          name: 'Checking',
          items: [
            { text: 'Compare Checking', href: '#' },
            { text: 'Any Deposit Checking', href: '#' },
            { text: '1% for the Planet Checking', href: '#' },
            { text: 'Premier Checking', href: '#' },
            { text: 'Mobile and Online Banking', href: '#' },
            { text: 'Financial Education', href: '#' }
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            { text: 'Compare Savings', href: '#' },
            { text: 'Classic Savings', href: '#' },
            { text: 'Choice Money Market Savings', href: '#' },
            { text: 'Certificated of Deposits (CDs)', href: '#' },
            { text: 'Flexible-Term CD', href: '#' },
            { text: 'Premium CD', href: '#' },
            { text: 'IRA CDs', href: '#' },
            { text: 'Flexible IRA CDs', href: '#' },
            { text: 'Premium IRA CDs', href: '#' },
            { text: 'IRA Add-On CDs', href: '#' }
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            { text: 'Compare Cards', href: '#' },
            { text: 'Cash Back Card', href: '#' },
            { text: 'Platinum Card', href: '#' },
            { text: 'Secured Card', href: '#' },
            { text: 'Rewards Program', href: '#' }
          ]
        },
        {
          id: 'consumer-loans',
          name: 'Consumer Loans',
          items: [
            { text: 'Car Loans', href: '#' },
            { text: 'RV Loans', href: '#' },
            { text: 'Boat Loans', href: '#' },
            { text: 'Personal Loans', href: '#' },
            { text: 'Pay Online', href: '#' }
          ]
        },
        {
          id: 'home-loans',
          name: 'Home Loans',
          items: [
            { text: 'Shop Rates', href: '#' },
            { text: 'Buy a Home', href: '#' },
            { text: 'Refinance a Home', href: '#' },
            { text: 'Open a Home Equity Line', href: '#' },
            { text: 'Find a Mortgage Specialist', href: '#' },
            { text: 'Make an Online Payment', href: '#' }
          ]
        },
        {
          id: 'investing',
          name: 'Investing',
          items: [{ text: 'Online Investing', href: '#' }]
        }
      ],
      CTA: () => <Button type='tertiary' label='Apply Now' link />,
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum 1'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'Small Business',
      id: 'small-business',
      products: [
        {
          id: 'checking',
          name: 'Checking',
          items: [
            { text: 'Compare Checking', href: '#' },
            { text: 'Classic Business Checking', href: '#' },
            { text: 'Any Deposit for Business', href: '#' },
            { text: 'Choice Business Checking', href: '#' }
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            { text: 'Compare Savings', href: '#' },
            { text: 'Classic Business Savings', href: '#' },
            { text: 'Business Money Market', href: '#' },
            { text: "Business CD's", href: '#' }
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            { text: 'Compare Cards', href: '#' },
            { text: 'Business Rewards Card', href: '#' },
            { text: 'Business Credit Card', href: '#' },
            { text: 'Commercial Card', href: '#' }
          ]
        },
        {
          id: 'lending',
          name: 'Lending',
          items: [
            { text: 'Line of Credit', href: '#' },
            { text: 'Term Loans', href: '#' },
            { text: 'SBA Loans', href: '#' },
            { text: 'International', href: '#' },
            { text: 'Equipment Leasing', href: '#' },
            { text: 'Agriculture Financing', href: '#' },
            { text: 'Commercial Real Estate', href: '#' }
          ]
        },
        {
          id: 'business-services',
          name: 'Business Services',
          items: [
            { text: 'Treasury Management', href: '#' },
            { text: 'Cash Management', href: '#' },
            { text: 'Payroll Services', href: '#' },
            { text: 'Merchant Services', href: '#' }
          ]
        }
      ],
      CTA: () => <Button type='tertiary' label='Apply Now' link />,
      Promo: () => (
        <NavigationPromo
          className='navigation-promo-green'
          image='/img/trees.png'
          title='Lorem ipsum 2'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        >
          <Button type='secondary' label='Button CTA' />
        </NavigationPromo>
      )
    },
    {
      name: 'Commercial',
      id: 'commercial',
      products: [
        {
          id: 'solutions',
          name: 'Solutions',
          items: [
            { text: 'Asset-Based Lending', href: '#' },
            { text: 'Dealer Financial Services', href: '#' },
            { text: 'Equipment Financing', href: '#' },
            { text: 'Fraud Prevention', href: '#' },
            { text: 'Global Trade Solutions', href: '#' },
            { text: 'Risk Management', href: '#' },
            { text: 'Syndicated Loans', href: '#' },
            { text: 'Treasury Management', href: '#' }
          ]
        },
        {
          id: 'treasury-management',
          name: 'Treasury Management',
          items: [
            { text: 'Payables', href: '#' },
            { text: 'Receivables', href: '#' },
            { text: 'Commercial Card', href: '#' },
            { text: 'Liquidity Management', href: '#' },
            { text: 'Information Reporting', href: '#' }
          ]
        },
        {
          id: 'international-banking',
          name: 'International Banking',
          items: [
            { text: 'Global Capabilities', href: '#' },
            { text: 'Global Trade Solutions', href: '#' },
            { text: 'International Cash Management', href: '#' },
            { text: 'Standby Letters of Credit', href: '#' },
            { text: 'Supply Chain Management', href: '#' }
          ]
        },
        {
          id: 'industry-insights',
          name: 'Industry Insights',
          items: [
            { text: 'Technology', href: '#' },
            { text: 'Healthcare', href: '#' },
            { text: 'Food and Agribusiness', href: '#' },
            { text: 'Wine and Beverage', href: '#' },
            { text: 'Commercial Real Estate', href: '#' },
            { text: 'Government and Public Sector', href: '#' },
            { text: 'Religious Institutions', href: '#' },
            { text: 'Title and Escrow', href: '#' },
            { text: 'Environmental, Social, and Governance', href: '#' }
          ]
        }
      ],
      CTA: () => <Button type='tertiary' label='Get in Touch' link />,
      Promo: () => (
        <NavigationPromo
          title='Lorem ipsum 3'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'Wealth',
      id: 'wealth',
      products: [
        {
          id: 'approach',
          name: 'Our Approach',
          items: [
            { text: 'Overview', href: '#' },
            { text: 'About Us', href: '#' }
          ]
        },
        {
          id: 'solutions',
          name: 'Solutions',
          items: [
            { text: 'Investment Advisory and Brokerage', href: '#' },
            { text: 'Global Investment Management and Fiduciary', href: '#' },
            { text: 'Insurance and Protection', href: '#' },
            { text: 'Impact Solutions', href: '#' },
            { text: 'Banking Solutions', href: '#' },
            { text: 'Online Investing', href: '#' }
          ]
        },
        {
          id: 'who-we-serve',
          name: 'Who we serve',
          items: [
            { text: 'Individual and Families', href: '#' },
            { text: 'Private Business and Entrepreneurs', href: '#' },
            { text: 'Ultra High Net Worth', href: '#' },
            { text: 'International', href: '#' }
          ]
        },
        {
          id: 'insights',
          name: 'Insights',
          items: [],
          directLink: '#'
        }
      ],
      CTA: () => <Button type='tertiary' label='Online Portfolio' link />,
      Promo: () => (
        <NavigationPromo
          image='/img/trees.png'
          title='Lorem ipsum 4'
          text='Dolor sit amet, consectetur adipisicing elit. Distinctio, ut.'
        />
      )
    },
    {
      name: 'About Us',
      id: 'about',
      products: [],
      directLink: '#',
      CTA: null,
      Promo: null
    }
  ],
  links: [
    { text: 'Help Center', href: '#' },
    { text: 'Locations', href: '#' },
    { text: 'Search', href: '#' }
  ]
}

export default navigation
