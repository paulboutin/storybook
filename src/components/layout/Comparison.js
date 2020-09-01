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
  <div className='comparison-b'>Comparison B</div>
)
