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

      <div className='comparison-list'>
        <ListElementItems
          items={[
            '$0 monthly service charge with any deposit per statement',
            'No minimum balance',
            'No direct deposit required'
          ]}
        />
      </div>

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

      <div className='comparison-list'>
        <ListElementItems
          items={[
            "We'll donate 1% of our revenue on this account to 1% for the Planet—at no cost to you",
            'CO2 tracking for your debit card purchases, right in the app',
            'Compostable debit card'
          ]}
        />
      </div>

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

      <div className='comparison-list'>
        <ListElementItems
          items={[
            'No fees on checks, money orders, incoming wires, or ATM withdrawals worldwide',
            'Relationship-based service and special rates on CDs and Money Market accounts',
            'Save on consumer loans with interest rate discounts',
            '$0 monthly service charge with minimum balance of $25,000'
          ]}
        />
      </div>

      <div className='comparison-link-container'>
        <Link standalone>View account details</Link>
      </div>
    </div>
  </div>
)

export const ComparisonB = () => (
  <div className='comparison-b'>
    <div className='comparison-pagination-container'>
      <Button
        type='ghost'
        icon='chevron-left'
        className='comparison-prev-column'
      />

      <div className='comparison-pagination' />

      <Button
        type='ghost'
        icon='chevron-right'
        className='comparison-next-column'
      />
    </div>

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
          <div className='comparison-list'>
            <ListElementItems
              items={[
                '3% cash back on dining, gas and groceries',
                'Unlimited 1% cash back on other qualifying purchases with no annual cap'
              ]}
            />
          </div>
        </div>

        <div className='comparison-column'>
          <div className='comparison-list'>
            <ListElementItems
              items={[
                'Competitive rates',
                'The perfect choice if you carry a balance'
              ]}
            />
          </div>
        </div>

        <div className='comparison-column'>
          <div className='comparison-list'>
            <ListElementItems
              items={[
                'No length of credit history or credit score required',
                'Deposit from $300 up to $12,000 to secure the credit limit you want'
              ]}
            />
          </div>
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
