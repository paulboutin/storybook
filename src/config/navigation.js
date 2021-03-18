import React from 'react'
import Button from '../components/base/Button'
import { NavigationPromo } from '../components/layout/Navigation'
import Link from '../components/base/Link'
import { prefixImagePath } from '../utils'

const navigation = prefix => ({
  config: {
    dropdowns: {
      maxPerColumn: 7
    },
    auth: {
      open: '#',
      signIn: '#',
      forgot: '#'
    }
  },
  banner: {
    notices: [
      {
        href: '#1',
        text: 'Learn about our new 1% for the planet account'
      },
      {
        href: '#',
        text: 'Learn more about our COVID-19 Response'
      }
    ],
    links: [
      {
        href: '#',
        text: 'Help Center'
      },
      {
        href: '#',
        text: 'Locations'
      },
      {
        href: '#',
        text: 'Search'
      }
    ]
  },
  categories: [
    {
      name: 'Personal',
      id: 'personal',
      products: [
        {
          id: 'checking',
          name: 'Checking',
          items: [
            {
              text: 'Compare Checking',
              href:
                'https://www.bankofthewest.com/personal-banking/checking-accounts'
            },
            {
              text: 'Any Deposit Checking',
              href:
                'https://www.bankofthewest.com/personal-banking/checking-accounts/any-deposit-checking'
            },
            {
              text: '1% for the Planet Checking',
              href:
                'https://www.bankofthewest.com/personal-banking/checking-accounts/one-percent-checking'
            },
            {
              text: 'Premier Checking',
              href:
                'https://www.bankofthewest.com/personal-banking/checking-accounts/premier'
            },
            {
              text: 'Mobile and Online Banking',
              href:
                'https://www.bankofthewest.com/personal-banking/mobile-banking'
            },
            {
              text: 'Financial Education',
              href:
                'https://www.bankofthewest.com/personal-banking/resource-center'
            }
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            {
              text: 'Compare Savings',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts'
            },
            {
              text: 'Classic Savings',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/classic-savings'
            },
            {
              text: 'Choice Money Market Savings',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/choice-money-market-savings'
            },
            {
              text: 'Certificated of Deposits (CDs)',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/cd'
            },
            {
              text: 'Flexible-Term CD',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/cd/flexible-term'
            },
            {
              text: 'Premium CD',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/cd/premium-cd'
            },
            {
              text: 'IRA CDs',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/ira'
            },
            {
              text: 'Flexible IRA CDs',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/ira/flexible'
            },
            {
              text: 'Premium IRA CDs',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/ira/premium'
            },
            {
              text: 'IRA Add-On CDs',
              href:
                'https://www.bankofthewest.com/personal-banking/savings-accounts/ira/add-on'
            }
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            {
              text: 'Compare Cards',
              href:
                'https://www.bankofthewest.com/personal-banking/credit-cards'
            },
            {
              text: 'Cash Back Card',
              href:
                'https://www.bankofthewest.com/personal-banking/credit-cards/cash-back-credit-card'
            },
            {
              text: 'Platinum Card',
              href:
                'https://www.bankofthewest.com/personal-banking/credit-cards/platinum'
            },
            {
              text: 'Secured Card',
              href:
                'https://www.bankofthewest.com/personal-banking/credit-cards/secured'
            },
            { text: 'Rewards Program', href: '#' }
          ]
        },
        {
          id: 'consumer-loans',
          name: 'Consumer Loans',
          items: [
            {
              text: 'Car Loans',
              href:
                'https://www.bankofthewest.com/personal-banking/loans/car-loans'
            },
            {
              text: 'RV Loans',
              href:
                'https://www.bankofthewest.com/personal-banking/loans/rv-loans'
            },
            {
              text: 'Boat Loans',
              href:
                'https://www.bankofthewest.com/personal-banking/loans/boat-loans'
            },
            {
              text: 'Personal Loans',
              href:
                'https://www.bankofthewest.com/personal-banking/loans/personal-loans'
            },
            {
              text: 'Pay Online',
              href: '#https://internet.speedpay.com/bankofwest/#/login/guest'
            }
          ]
        },
        {
          id: 'home-loans',
          name: 'Home Loans',
          items: [
            {
              text: 'Shop Rates',
              href: 'https://mortgage.bankofthewest.com/default/ExploreRates'
            },
            {
              text: 'Buy a Home',
              href:
                'https://www.bankofthewest.com/personal-banking/loans/mortgage-purchase'
            },
            {
              text: 'Refinance a Home',
              href:
                'https://www.bankofthewest.com/personal-banking/loans/mortgage-refinance'
            },
            {
              text: 'Open a Home Equity Line',
              href: 'https://mortgage.bankofthewest.com/Mortgage/applynow'
            },
            {
              text: 'Find a Mortgage Specialist',
              href:
                'https://www.bankofthewest.com/customer-service/branch-results.html?loanofficer=true'
            },
            {
              text: 'Make an Online Payment',
              href: 'https://internet.speedpay.com/bankofwest/#/login/guest'
            }
          ]
        },
        {
          id: 'investing',
          name: 'Investing',
          items: [
            {
              text: 'Online Investing',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/online-investing'
            }
          ]
        }
      ],
      link: 'https://www.bankofthewest.com',
      CTA: () => <Button type='tertiary' label='Apply Now' link />,
      Promo: () => (
        <NavigationPromo
          image={prefixImagePath({
            prefix,
            src: 'trees.png'
          })}
          title='1% for the Planet Checking Account'
          text='The first checking account to give 1% back to the planet at no cost to you.'
        >
          <Link standalone href='#'>
            Learn More
          </Link>
        </NavigationPromo>
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
            {
              text: 'Compare Checking',
              href:
                'https://www.bankofthewest.com/small-business/checking-accounts'
            },
            {
              text: 'Classic Business Checking',
              href:
                'https://www.bankofthewest.com/small-business/checking-accounts/classic-business-checking'
            },
            {
              text: 'Any Deposit for Business',
              href:
                'https://www.bankofthewest.com/small-business/checking-accounts/any-deposit-business-checking'
            },
            {
              text: 'Choice Business Checking',
              href:
                'https://www.bankofthewest.com/small-business/checking-accounts/choice-business-checking'
            }
          ]
        },
        {
          id: 'savings',
          name: 'Savings',
          items: [
            {
              text: 'Compare Savings',
              href:
                'https://www.bankofthewest.com/small-business/savings-accounts'
            },
            {
              text: 'Classic Business Savings',
              href:
                'https://www.bankofthewest.com/small-business/savings-accounts/classic-business-savings'
            },
            {
              text: 'Business Money Market',
              href:
                'https://www.bankofthewest.com/small-business/savings-accounts/business-money-market-advantage'
            },
            {
              text: "Business CD's",
              href: 'https://www.bankofthewest.com/small-business/cds'
            }
          ]
        },
        {
          id: 'credit-cards',
          name: 'Credit Cards',
          items: [
            {
              text: 'Compare Cards',
              href: 'https://www.bankofthewest.com/small-business/credit-cards'
            },
            {
              text: 'Business Rewards Card',
              href:
                'https://www.bankofthewest.com/small-business/credit-cards/business-rewards-mastercard'
            },
            {
              text: 'Business Credit Card',
              href:
                'https://www.bankofthewest.com/small-business/credit-cards/business-credit-card'
            },
            {
              text: 'Commercial Card',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/commercial-cards'
            }
          ]
        },
        {
          id: 'lending',
          name: 'Lending',
          items: [
            {
              text: 'Line of Credit',
              href:
                'https://www.bankofthewest.com/small-business/loans-lines-of-credit/lines-of-credit'
            },
            {
              text: 'Term Loans',
              href:
                'https://www.bankofthewest.com/small-business/loans-lines-of-credit/business-loans'
            },
            {
              text: 'SBA Loans',
              href:
                'https://www.bankofthewest.com/small-business/loans-lines-of-credit/sba-loans'
            },
            {
              text: 'Equipment Leasing',
              href:
                'https://www.bankofthewest.com/small-business/loans-lines-of-credit/equipment-leases'
            },
            {
              text: 'Agriculture Financing',
              href:
                'https://www.bankofthewest.com/small-business/loans-lines-of-credit/agriculture-loans'
            },
            {
              text: 'Commercial Real Estate',
              href:
                'https://www.bankofthewest.com/small-business/loans-lines-of-credit/business-loans/commercial-real-estate-loans'
            }
          ]
        },
        {
          id: 'business-services',
          name: 'Business Services',
          items: [
            { text: 'Treasury Management', href: '#' },
            {
              text: 'Cash Management',
              href:
                'https://www.bankofthewest.com/small-business/business-services/cash-management'
            },
            {
              text: 'Payroll Services',
              href:
                'https://www.bankofthewest.com/small-business/business-services/payroll-services'
            },
            {
              text: 'Merchant Services',
              href:
                'https://www.bankofthewest.com/small-business/more-solutions/merchant-services'
            }
          ]
        }
      ],
      link: 'https://www.bankofthewest.com/small-business',
      CTA: () => <Button type='tertiary' label='Apply Now' link />,
      Promo: () => (
        <NavigationPromo
          image={prefixImagePath({
            prefix,
            src: 'trees.png'
          })}
          title='Paycheck Protection Program'
          text='Get information about the SBA Paycheck Protection Program'
        >
          <Link standalone href='#'>
            Learn More
          </Link>
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
            {
              text: 'Asset-Based Lending',
              href:
                'https://www.bankofthewest.com/commercial-banking/solutions/asset-based-lending'
            },
            {
              text: 'Dealer Financial Services',
              href:
                'https://www.bankofthewest.com/commercial-banking/solutions/dealer-financial-services'
            },
            {
              text: 'Equipment Financing',
              href:
                'https://www.bankofthewest.com/commercial-banking/solutions/equipment-financing'
            },
            {
              text: 'Fraud Prevention',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/fraud-prevention'
            },
            {
              text: 'Global Trade Solutions',
              href:
                'https://www.bankofthewest.com/commercial-banking/international/global-trade-solutions'
            },
            {
              text: 'Risk Management',
              href:
                'https://www.bankofthewest.com/commercial-banking/solutions/risk-management'
            },
            {
              text: 'Syndicated Loans',
              href:
                'https://www.bankofthewest.com/commercial-banking/solutions/loan-syndications'
            },
            {
              text: 'Treasury Management',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management'
            }
          ]
        },
        {
          id: 'treasury-management',
          name: 'Treasury Management',
          items: [
            {
              text: 'Payables',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/payables'
            },
            {
              text: 'Receivables',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/receivables'
            },
            {
              text: 'Commercial Card',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/commercial-cards'
            },
            {
              text: 'Liquidity Management',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/liquidity-management'
            },
            {
              text: 'Information Reporting',
              href:
                'https://www.bankofthewest.com/commercial-banking/treasury-management/information-reporting'
            }
          ]
        },
        {
          id: 'international-banking',
          name: 'International Banking',
          items: [
            {
              text: 'Global Capabilities',
              href:
                'https://www.bankofthewest.com/commercial-banking/international/global-capabilities'
            },
            {
              text: 'Global Trade Solutions',
              href:
                'https://www.bankofthewest.com/commercial-banking/international/global-trade-solutions'
            },
            {
              text: 'International Cash Management',
              href:
                'https://www.bankofthewest.com/commercial-banking/international/international-cash-management'
            },
            {
              text: 'Standby Letters of Credit',
              href:
                'https://www.bankofthewest.com/commercial-banking/international/global-trade-solutions/standby-letters-credit'
            },
            {
              text: 'Supply Chain Management',
              href:
                'https://www.bankofthewest.com/commercial-banking/international/global-trade-solutions/supply-chain-management'
            }
          ]
        },
        {
          id: 'industry-insights',
          name: 'Industry Insights',
          items: [
            {
              text: 'Technology',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/technology'
            },
            {
              text: 'Healthcare',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/healthcare'
            },
            {
              text: 'Food and Agribusiness',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/agribusiness-farming'
            },
            {
              text: 'Wine and Beverage',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/beverage-industry'
            },
            {
              text: 'Commercial Real Estate',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/real-estate'
            },
            {
              text: 'Government and Public Sector',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/government-banking-public-finance'
            },
            {
              text: 'Religious Institutions',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/religious-institution-banking'
            },
            {
              text: 'Title and Escrow',
              href:
                'https://www.bankofthewest.com/commercial-banking/industry/title-escrow-banking'
            },
            { text: 'Environmental, Social, and Governance', href: '#' }
          ]
        }
      ],
      link: 'https://www.bankofthewest.com/commercial-banking',
      CTA: () => <Button type='tertiary' label='Get in Touch' link />,
      Promo: () => (
        <NavigationPromo
          image={prefixImagePath({
            prefix,
            src: 'trees.png'
          })}
          title="Scott Anderson's Economic Report"
          text='Our Chief Economist, Scott A. Anderson, analyzes international, national, and regional economic trends.'
        >
          <Link standalone href='#'>
            learn More
          </Link>
        </NavigationPromo>
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
            {
              text: 'Overview',
              href:
                'https://www.bankofthewest.com/wealth-management/our-approach'
            },
            {
              text: 'About Us',
              href:
                'https://www.bankofthewest.com/wealth-management/our-approach/customized-guidance'
            }
          ]
        },
        {
          id: 'solutions',
          name: 'Solutions',
          items: [
            {
              text: 'Investment Advisory and Brokerage',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/investments'
            },
            {
              text: 'Global Investment Management and Fiduciary',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/global-investments-fiduciary-solutions'
            },
            {
              text: 'Insurance and Protection',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/insurance'
            },
            {
              text: 'Impact Solutions',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/impact-solutions'
            },
            {
              text: 'Banking Solutions',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/deposits'
            },
            {
              text: 'Online Investing',
              href:
                'https://www.bankofthewest.com/wealth-management/our-solutions/online-investing'
            }
          ]
        },
        {
          id: 'who-we-serve',
          name: 'Who we serve',
          items: [
            {
              text: 'Individual and Families',
              href:
                'https://www.bankofthewest.com/wealth-management/who-we-serve/individuals-families'
            },
            {
              text: 'Private Business and Entrepreneurs',
              href:
                'https://www.bankofthewest.com/wealth-management/who-we-serve/key-client-group-america'
            },
            {
              text: 'Ultra High Net Worth',
              href:
                'https://www.bankofthewest.com/wealth-management/who-we-serve/private-business-owners'
            },
            {
              text: 'International',
              href:
                'https://www.bankofthewest.com/wealth-management/who-we-serve/international-clients'
            }
          ]
        },
        {
          id: 'insights',
          name: 'Insights',
          items: [],
          directLink: '#'
        }
      ],
      link: 'https://www.bankofthewest.com/wealth-management',
      CTA: () => <Button type='tertiary' label='Online Portfolio' link />,
      Promo: () => (
        <NavigationPromo
          image={prefixImagePath({
            prefix,
            src: 'trees.png'
          })}
          title='Investing in the Time of COVID-19'
          text='Chief Investment Officer Wade Balliet shares how markets are navigating through COVID-19 and the new normal for investors.'
        >
          <Link standalone href='#'>
            Learn More
          </Link>
        </NavigationPromo>
      )
    },
    {
      name: 'About Us',
      id: 'about',
      products: [],
      link: 'https://www.bankofthewest.com/about-us',
      CTA: null,
      Promo: null
    }
  ],
  links: [
    { text: 'Help Center', href: '#' },
    { text: 'Locations', href: '#' },
    { text: 'Search', href: '#' }
  ]
})

export default navigation
