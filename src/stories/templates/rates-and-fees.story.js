import React from 'react'
import Accordion from '../../components/base/Accordion'
import Breadcrumbs from '../../components/base/Breadcrumbs'
import Eyebrow from '../../components/base/Eyebrow'
import Footer from '../../components/layout/Footer'
import Legal from '../../components/layout/Legal'
import Link from '../../components/base/Link'
import Navigation from '../../components/layout/Navigation'
import Table from '../../components/base/Table'

export const RatesAndFees = () => {
  const accordions = [
    {
      title: 'ATM Cards and Debit Cards',
      table: {
        body: [
          [['ATM Card/Debit Card Purchases', 'ATM Card/Debit Card Purchases']],
          [['ATM Statements', '$2 each']],
          [
            ['Foreign Currency Transactions', ''],
            ['MasterCard® Fee', '1% of transaction amount'],
            ['Bank of the West Fee', '2% of transaction amount']
          ],
          [
            ['Non-Bank of the West ATM Transactions', ''],
            ['Balance Inquiry', '$3 per inquiry'],
            ['Transfer', '$3 per transfer'],
            ['Withdrawal', '$3 per withdrawal']
          ],
          [
            [
              'Debit Card Cash Advance Withdrawal at a financial institution that displays the MasterCard® Logo',
              '$3 per withdrawal'
            ]
          ],
          [['ATM Card or Debit Card Reissuance (Lost or Stolen)', '$5']],
          [['Withdrawal', '$3 per withdrawal']],
          [['Expedited Domestic Delivery of ATM/Debit Card', '$25']],
          [['Expedited International Delivery of ATM/Debit Card', '$65']],
          [['Debit Rewards Annual Membership', '$15']]
        ]
      }
    },
    {
      title: 'IRA',
      table: {
        body: [
          [['IRA Annual Fee', '$15']],
          [['IRA Transfer or Closing Fee', '$15']]
        ]
      }
    },
    {
      title: 'Night Depository',
      table: {
        body: [
          [['Annual Fee', '$20']],
          [['Key Deposit (non-refundable)', '$5 per key']]
        ]
      }
    },
    {
      title: 'Online Banking',
      table: {
        body: [
          [
            ['External Transfers', ''],
            [
              'Standard (3 business days) External Transfer – Web Fee',
              'No charge'
            ],
            ['Next Business Day External Transfer', '$3 each'],
            ['Same Business Day External Transfer', '$10 each']
          ],
          [['Zelle® Payments', '']],
          [
            ['Online Bill Pay', ''],
            ['Same Day Online Bill Payment - Transaction Fee', '$10.95 each'],
            ['Overnight Check - Transaction Fee', '$17.50 each']
          ]
        ]
      }
    },
    {
      title: 'Overdrafts and Returned Items',
      table: {
        body: [
          [
            ['Overdraft Fee or Returned Item Fee', '$35 each item'],
            [
              {
                data:
                  '<b>$5 Overdraft Buffer:</b> No Overdraft Fees will be assessed on your checking or money market Account if at the end of the Business Day your Account’s Available Balance is overdrawn by $5 or less after all transactions have posted.',
                cols: 2
              }
            ],
            [
              {
                data:
                  '<b>Daily Maximum:</b> No more than five (5) Overdraft and/or Returned Item Fees will be applied on any one (1) Business Day per checking or money market Account.',
                cols: 2
              }
            ],
            [
              {
                data:
                  '<b>Overdraft Fee Eraser:</b> Upon request, we will refund one (1) Overdraft Fee or Returned Item Fee in a rolling 12 month period.',
                cols: 2
              }
            ]
          ],
          [
            [
              {
                data:
                  '<b>Extended Overdraft Fee:</b> If your checking or money market Account remains overdrawn $15 or more for five (5) consecutive Business Days.',
                cols: 2
              }
            ]
          ]
        ]
      }
    },
    {
      title: 'Overdraft Programs',
      table: {
        body: [
          [
            [
              'Savings Overdraft Protection Transfer Fee',
              '$12 each day that a transfer occurs'
            ]
          ],
          [
            [
              'Key Deposit (non-refundable)',
              'Refer to the Gold Line Account Agreement and Disclosure Statement'
            ]
          ]
        ]
      }
    },
    {
      title: 'Safe Deposit Box',
      table: {
        body: [
          [['Set-Up Fee', '$20 per box']],
          [['Annual Fee', 'Varies']],
          [['Safe Deposit Box Forced Opening', 'Varies based on cost to Bank']]
        ]
      }
    },
    {
      title: 'Statements',
      table: {
        body: [
          [['Check Safekeeping', 'No charge']],
          [
            [
              'Image Statement (front of checks only)',
              '$2 per statement cycle.<br />Money Market Accounts - no charge'
            ]
          ],
          [
            [
              'Image Statement (front and back of checks',
              '$3 per statement cycle'
            ]
          ],
          [['Copy of a Statement', '$5 each']],
          [['Ongoing Duplicate Statements', '$5 each']],
          [['Snapshot Statement', '$2 each']],
          [['Special Schedule Statement (off-cycle)', '$5 each']],
          [['Paper Statement Fee', '$3/month per checking Account']],
          [
            [
              {
                data:
                  '<span style="font-weight: normal">Charged each monthly statement cycle you receive a paper statement (fee also applies to each checking Account subject to the fee in a combined statement). Fee waived for Bank of the West Premier Checking OR if any account owner is age 65 years or older OR account ownership is ineligible for Online Banking access OR Account has Alternative Statement Option of Audio, Braille, or Large Font.</span>',
                cols: 2
              }
            ]
          ]
        ]
      }
    },
    {
      title: 'Consumer Savings and Money Market Accounts',
      table: {
        header: [
          [
            'Type of Account',
            'Classic Savings',
            'Choice Money Market Savings',
            'Money Market Premier',
            'Assurance Money Market'
          ]
        ],
        body: [
          [['Minimum Amount to Open', '$25', '$100', '$10,000', '$10,000']],
          [['Pays Interest', 'Yes', 'Yes', 'Yes', 'Yes']],
          [['Monthly Service Charge', '$5', '$15', '$15', '$15']],
          [
            [
              'Ways to Waive Monthly Service Charge',
              `Meet at least one of the following each month:
               <br /><br />
               • Make a single transfer of $25 or more from a Bank of the West consumer checking Account through the Auto-Save program<sup>1</sup>
               <br /><br />
               <b>OR</b>
               <br /><br />
               • Maintain an average monthly balance of at least $300 in this Account
               <br /><br />
               <b>OR</b>
               <br /><br />
               • Primary Account owner is age 18 or younger`,
              `Meet at least one of the following each month:
               <br /><br />
               • Make a single transfer of $75 or more from a Bank of the West consumer checking Account through the Auto-Save program<sup>1</sup>
               <br /><br />
               <b>OR</b>
               <br /><br />
               • Maintain an average monthly balance of at least $5,000 in this Account
               <br /><br />
               <b>OR</b>
               <br /><br />
               • Maintain a Bank of the West Premier Checking Account. Refer to the Bank of the West Premier Program disclosure for details.`,
              'Maintain a $10,000 average monthly balance in this account each statement cycle.',
              'Maintain a $10,000 average monthly balance in this account each statement cycle.'
            ]
          ],
          [
            [
              'Transaction Limits',
              {
                data:
                  'Federal regulations require that all money market and savings Accounts be strictly limited to a total of no more than six (6) transactions by check, draft, debit card, or similar order payable to third parties and/or pre-authorized, automatic or telephone transfers from the Account either to a third party or to a another Account (includes Online Banking transfers) per statement period, for money market Accounts, or calendar month, for savings Accounts. For each such transaction in excess of six (6), an Excess Withdrawal Fee will be charged, regardless of the Account balance, other fees, or type of withdrawal. There is no limit to the number of withdrawals paid directly to you by mail, messenger, ATM, or in person.',
                cols: 4
              }
            ]
          ],
          [
            [
              'Excess Withdrawal Fee',
              '$15 each',
              '$15 each',
              '$15 each',
              '$15 each'
            ]
          ],
          [
            [
              'Other Charges',
              {
                data:
                  'See <i>Schedule of Fees and Charges for Personal Deposit Accounts</i> for other fees that may apply.',
                cols: 4
              }
            ]
          ]
        ]
      }
    },
    {
      title: 'Certificate of Deposit and Individual Retirement Accounts',
      table: {
        header: [
          [
            'Type of Account',
            'Certificates of Deposit (CDs)',
            'Individual Retirement Accounts (IRA CDs)'
          ]
        ],
        body: [
          [
            [
              'Minimum Amount to Open',
              'Flexible Term CD: $1,000',
              'Premium Money Market IRA CD (91 days to 24 months): $100'
            ],
            [
              '',
              'Premium Money Market CD: $2,500',
              'Flexible IRA CD (12-60 months): $100'
            ],
            ['', '7-32 Day CD: $100,000', 'IRA Add-On CDP2P (12 months): $100']
          ],
          [['Pays Interest', 'Yes', 'Yes']],
          [
            [
              'Early Withdrawal Penalty',
              'See <i>Deposit Account Disclosure</i> booklet for details,',
              'See <i>Deposit Account Disclosure</i> booklet for details.'
            ]
          ],
          [['IRA Annual Fee', 'N/A', '$12 per plan']],
          [['IRA Transfer or Closing Fee', 'N/A', '$25 per plan']],
          [
            [
              'Other Charges',
              {
                data:
                  'See <i>Deposit Account Disclosure</i> booklet for other fees that may apply.',
                cols: 2
              }
            ]
          ]
        ]
      }
    },
    {
      title: 'ATM and Debit Card Transaction Types and Limitations',
      table: {
        header: [
          [
            { data: 'Card Type', rows: 2 },
            { data: 'ATM Withdrawals and Transfers<sup>1</sup>', cols: 2 },
            { data: 'Point-of-Sale Transactions', cols: 2 },
            { data: 'Cash Advances<sup>2</sup>', cols: 2 }
          ],
          [
            'Frequency',
            'Dollar Amount Limitations<sup>3</sup>',
            'Frequency',
            'Dollar Amount Limitations<sup>3</sup>',
            'Frequency',
            'Dollar Amount Limitations<sup>3</sup>'
          ]
        ],
        body: [
          [
            [
              'ATM Card',
              'Unlimited',
              'Up to $500 a day',
              'N/A',
              'N/A',
              'N/A',
              'N/A'
            ]
          ],
          [
            [
              'Debit Card<sup>4</sup>',
              'Unlimited',
              'Up to $500 a day',
              'Up to 30 merchant transactions per day',
              'Up to $3,500 worth of goods and services per day',
              'Unlimited',
              'Up to $1,000 per day'
            ]
          ]
        ]
      }
    }
  ]

  return (
    <>
      <Navigation />

      <main className='rates-and-fees'>
        <section className='raf-intro container'>
          <Breadcrumbs
            items={[
              'Banking',
              'Savings',
              'Schedule of Fees and Changes for Personal Deposit Accounts'
            ]}
          />

          <p className='raf-rotate-hint visible-xs'>
            <i className='icon icon-rotate-phone' />
            <span>Rotate device for best view</span>
          </p>

          <Eyebrow>Personal deposit accounts</Eyebrow>
          <h3 className='raf-title'>Schedule of Fees and Charges</h3>

          <div className='raf-intro-text-wrapper'>
            <p className='raf-intro-text'>
              <i className='icon icon-location' /> Arizona, California,
              Colorado, Idaho, Iowa, Kansas, Missouri, Nebraska, New Mexico,
              North Dakota, Oklahoma, Oregon, South Dakota*, Utah, Washington,
              Wisconsin, Wyoming Branches
              <br />
              <br />
              Please keep these important documents with your Deposit Account
              Disclosure and Safe Deposit Box Rental Agreement Terms and
              Conditions for Personal Accounts booklet and retain them for
              future reference.
              <br />
              <br />
              Effective February 1, 2020
              <br />
              <br />
              This Schedule applies to personal Accounts opened in the states
              referenced above. This Schedule, along with the Deposit Account
              Disclosure and Safe Deposit Box Rental Agreement Terms and
              Conditions for Personal Accounts, current rate sheet, your current
              signature card, and any other addenda that may be provided to you
              at Account opening or from time to time thereafter form the
              Agreement between you and Bank of the West (“Bank”) as to your
              checking, money market, savings, certificates of deposit, and
              retirement Accounts (collectively, the “Agreement”). The Bank
              reserves the right to add to, delete from, discontinue, or
              otherwise amend any product, service, fee or charge, package or
              program offering at any time with such notice as is required by
              law. To the extent that any of the terms or provisions of this
              Schedule of Fees and Charges conflict with those contained in any
              other document in the Agreement, the terms and provisions
              contained herein shall control. Capitalized terms shall have the
              same meaning as in the Agreement, unless otherwise defined herein.
              We regret that this document is not available in languages other
              than English. Please make sure that you understand all terms and
              conditions applicable to your deposit Account(s) and services.
            </p>

            <Link>
              <i className='icon icon-arrow-down' /> Download
            </Link>
          </div>
        </section>

        <section className='raf-accordions container'>
          {accordions.map((accordion, index) => (
            <Accordion key={index} title={accordion.title}>
              <Table data={accordion.table} />
            </Accordion>
          ))}
        </section>

        <Legal />

        <section className='raf-legal-addendum container'>
          <b>
            Addendum to the Deposit Account Disclosure and Safe Deposit Box
            Rental Agreement Terms and Conditions For Personal Accounts (All
            States)
          </b>
          <br />
          <br />
          Effective June 29, 2020
          <br />
          <br />
          The following information reflects changes to your current Deposit
          Account Disclosure and Safe Deposit Box Rental Agreement Terms and
          Conditions for Personal Accounts (Effective December 1, 2019). The
          following changes to the Bank's Funds Availability Policy have been
          made to the sections below and are bolded and highlighted in grey. All
          other sections of the Policy remain unchanged.
          <br />
          This Addendum, together with the applicable Schedule of Fees and
          Charges, Deposit Account Disclosure and Safe Deposit Box Rental
          Agreement Terms and Conditions for Personal Accounts, current Rate
          Sheet, your signature card and any other addenda that were provided to
          you at Account opening or from time to time thereafter with reference
          to your deposit Account(s), form the agreement (“Agreement”) between
          you and Bank of the West (“Bank,” “we,” or “us”). Except as expressly
          stated below, all other terms and conditions in our Agreement with you
          continue in full force and effect. We reserve the right to add to,
          delete from, discontinue or otherwise amend any product, service, fee
          or charge, program or package offering at any time with such notice as
          is required by law. Maintaining your Account after the effective date
          of this addendum constitutes your acceptance of the revised terms and
          conditions. Unless otherwise defined herein, the capitalized terms
          contained in this Addendum shall have the same meaning as the terms
          defined in the Agreement.
          <br />
          <br />
          <b>Longer Delays May Apply (Pages 24/25)</b>
          <br />
          <br />
          In some cases, we will not make all of the funds that you deposit by
          check available to you on the first Business Day after the day of your
          deposit. Depending on the type of check that you deposit, funds may
          not be available until the second Business Day after the day of your
          deposit. The first <b>$225</b> of your deposits, however, will be
          available on the first Business Day after the day of your deposit.
          <br />
          <br />
          If we are not going to make all of the funds from your deposit
          available on the first Business Day after the day of your deposit, we
          will notify you at the time you make your deposit. We will also tell
          you when the funds will be available. If your deposit is not made
          directly to one of our employees, or if we decide to take this action
          after you have left the premises, we will mail you the notice by the
          day after we receive your deposit. If you will need the funds from a
          deposit right away, you should ask us when the funds will be
          available.
          <br />
          <br />
          In addition, some or all of the funds you deposit by check may be
          delayed for a longer period under the following circumstances:
          <br />
          <br />
          <ul>
            <li>We believe a check you deposit will not be paid.</li>
            <li>
              You deposit checks totaling more than <b>$5,525</b> on any one
              day.
            </li>
            <li>You redeposit a check that has been returned unpaid.</li>
            <li>
              You have overdrawn your Account repeatedly in the last six months.
            </li>
            <li>
              There is an emergency, such as failure of computer or
              communications equipment.
            </li>
          </ul>
          <br />
          We will notify you if we delay your ability to withdraw funds for any
          of these reasons, and we will tell you when the funds will be
          available. They will generally be available no later than the seventh
          Business Day after the day of your deposit.
          <br />
          We are under no obligation to pay any Items you have authorized
          against funds that are not yet available. The Bank may pay such items
          at our discretion and overdraw your Account or they may be returned
          due to an insufficient Available Balance. Refer to the OVERDRAWN
          ACCOUNTS AND PAYMENT OF OVERDRAFTS section of this Agreement for
          further details.
          <br />
          <br />
          <b>Special Rules for New Accounts (Page 25)</b>
          <br />
          <br />
          If you are a new customer, the following special rules will apply
          during the first 30 days your Account is open.
          <br />
          Funds from electronic Direct Deposits and wire transfers to your
          Account will be available on the day we receive the deposit (excluding
          the opening deposit to a certificate of deposit using our Online
          Banking). Funds from deposits of cash and the first <b>$5,525</b> of a
          day's total deposits of cashier's, certified, teller's, traveler's,
          and federal, state and local government checks will be available on
          the first Business Day after the day of your deposit if the deposit
          meets certain conditions. For example, the checks must be payable to
          you. The excess amount over <b>$5,525</b> will be available on the
          ninth Business Day after the day of your deposit. If your deposit of
          these checks (other than a U.S. Treasury check) is not made in person
          to one of our employees, the first $5,525 will not be available until
          the second Business Day after the day of your deposit. Funds from all
          other check deposits will be available on the ninth Business Day after
          the day of your deposit.
          <br />
          <br />
          <b>
            Deposits at Automated Teller Machines and Cut-Off Times (Page 25)
          </b>
          <br />
          <br />
          If you make a deposit at one of our ATMs before 4:30 PM Pacific Time
          (PT) on a Business Day we are open, we will consider that day to be
          the day of your deposit. However, if you make the deposit after 4:30
          PM PT, or on a non-Business Day, or on a day we are not open, we will
          consider the next Business Day we are open to be the day of your
          deposit.
          <br />
          <br />
          The first <b>$225</b> of funds from any deposit (cash or checks) made
          at ATMs we own or operate will be available on the first Business Day
          after the day of your deposit, unless a longer hold applies.
        </section>
      </main>

      <Footer />
    </>
  )
}

export default {
  title: 'Templates',
  parameters: {
    'in-dsm': {
      id: '5f6bae8f34518443724a7d6e'
    }
  }
}
