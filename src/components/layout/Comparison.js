import React from 'react'
import Button from '../base/Button'
import Link from '../base/Link'
import { ListElementItems } from './ListElement'

export const ComparisonA = () => (
  <div className='comparison-a'>
    <div className='comparison-column'>
      <div className='comparison-column-wrapper'>
        <div>
          <h4 className='comparison-column-title'>Any Deposit Checking</h4>
          <p>
            An account that makes it easy to waive the monthly service charge
          </p>
        </div>
        <Button type='primary' label='Apply Now' />
      </div>
      <div className='comparison-column-divider' />

      <ListElementItems
        items={[
          '$0 monthly service charge with any deposit per statement',
          'No minimum balance',
          'No direct deposit required'
        ]}
      />

      <div className='comparison-link-container'>
        <Link standalone>View account details</Link>
      </div>
    </div>

    <div className='comparison-column'>
      <div className='comparison-column-wrapper'>
        <div>
          <h4 className='comparison-column-title'>1% for the Planet</h4>
          <p>An account that helps the planet (at no cost to you)</p>
        </div>
        <Button type='primary' label='Apply Now' />
      </div>
      <div className='comparison-column-divider' />
      <p className='comparison-column-extra'>
        All the benefits of our Any Deposit Checking account, plus:
      </p>

      <ListElementItems
        items={[
          "We'll donate 1% of our revenue on this account to 1% for the Planet—at no cost to you",
          'CO2 tracking for your debit card purchases, right in the app',
          'Compostable debit card'
        ]}
      />

      <div className='comparison-link-container'>
        <Link standalone>View account details</Link>
      </div>
    </div>

    <div className='comparison-column'>
      <div className='comparison-column-wrapper'>
        <div>
          <h4 className='comparison-column-title'>Premier Checking</h4>
          <p>
            An account with the highest level of service and travel benefits
          </p>
        </div>
        <Button type='primary' label='Apply Now' />
      </div>
      <div className='comparison-column-divider' />

      <ListElementItems
        items={[
          'No fees on checks, money orders, incoming wires, or ATM withdrawals worldwide',
          'Relationship-based service and special rates on CDs and Money Market accounts',
          'Save on consumer loans with interest rate discounts',
          '$0 monthly service charge with minimum balance of $25,000'
        ]}
      />

      <div className='comparison-link-container'>
        <Link standalone>View account details</Link>
      </div>
    </div>
  </div>
)

export const ComparisonB = () => (
  <div className='comparison-b'>
    <div className='comparison-cta'>
      <div className='comparison-row-wrapper'>
        <div className='comparison-column'>
          <div className='comparison-column-card'>
            <div className='comparison-column-image'>
              <img src='http://via.placeholder.com/800x500' alt='Credit Card' />
            </div>
            <h4 className='comparison-column-title'>
              Cash Back World Credit Card
            </h4>
            <p className='comparison-column-subtitle'>
              For generous cash rewards
            </p>
            <Button type='primary' label='Apply Now' />
            <Link>Account details</Link>
          </div>
        </div>

        <div className='comparison-column'>
          <div className='comparison-column-card'>
            <div className='comparison-column-image'>
              <img src='http://via.placeholder.com/800x500' alt='Credit Card' />
            </div>
            <h4 className='comparison-column-title'>Platinum Credit Card</h4>
            <p className='comparison-column-subtitle'>
              For our lowest interest rate
            </p>
            <Button type='primary' label='Apply Now' />
            <Link>Account details</Link>
          </div>
        </div>

        <div className='comparison-column'>
          <div className='comparison-column-card'>
            <div className='comparison-column-image'>
              <img src='http://via.placeholder.com/800x500' alt='Credit Card' />
            </div>
            <h4 className='comparison-column-title'>Secured Credit Card</h4>
            <p className='comparison-column-subtitle'>
              For establishing or rebuilding credit
            </p>
            <Button type='primary' label='Apply Now' />
            <Link>Account details</Link>
          </div>
        </div>
      </div>
    </div>

    <header className='comparison-header'>Features</header>

    <div className='comparison-row'>
      <div className='comparison-row-wrapper'>
        <div className='comparison-column'>
          <ul className='comparison-list'>
            <li>3% cash back on dining, gas and groceries</li>
            <li>
              Unlimited 1% cash back on other qualifying purchases with no
              annual cap
            </li>
          </ul>
        </div>

        <div className='comparison-column'>
          <ul className='comparison-list'>
            <li>Competitive rates</li>
            <li>The perfect choice if you carry a balance</li>
          </ul>
        </div>

        <div className='comparison-column'>
          <ul className='comparison-list'>
            <li>No length of credit history or credit score required</li>
            <li>
              Deposit from $300 up to $12,000 to secure the credit limit you
              want
            </li>
          </ul>
        </div>
      </div>
    </div>

    <header className='comparison-header'>APR</header>

    <div className='comparison-row'>
      <div className='comparison-row-wrapper'>
        <div className='comparison-column'>
          <h6 className='comparison-column-title'>0% APR</h6>
          <p>
            for first 6 months on all purchases then 15.99% - 22.99% variable
            APR
          </p>
        </div>

        <div className='comparison-column'>
          <h6 className='comparison-column-title'>0% APR</h6>
          <p>
            for first 6 months on all purchases then 14.99% - 22.99% variable
            APR for purchases
          </p>
        </div>

        <div className='comparison-column'>
          <h6 className='comparison-column-title'>21.99% APR</h6>
          <p>variable APR for purchases</p>
        </div>
      </div>
    </div>

    <header className='comparison-header'>Special offer</header>

    <div className='comparison-row'>
      <div className='comparison-row-wrapper'>
        <div className='comparison-column'>
          <p>Save with a low intro APR and earn $150 bonus cash</p>
        </div>

        <div className='comparison-column' />

        <div className='comparison-column' />
      </div>
    </div>

    <header className='comparison-header'>Annual fee</header>

    <div className='comparison-row'>
      <div className='comparison-row-wrapper'>
        <div className='comparison-column'>
          <h6 className='comparison-column-title'>$0</h6>
        </div>

        <div className='comparison-column'>
          <h6 className='comparison-column-title'>$0</h6>
        </div>

        <div className='comparison-column'>
          <h6 className='comparison-column-title'>$25</h6>
        </div>
      </div>
    </div>
  </div>
)
