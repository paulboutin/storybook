import React from 'react'
import Navigation from '../../components/layout/Navigation'
import Breadcrumbs from '../../components/base/Breadcrumbs'

export const InterestRates = () => (
  <>
    <Navigation />

    <main className='interest-rates container'>
      <Breadcrumbs
        items={['Home', 'Credit Cards', 'Cash Back Card', 'Interest Rates']}
      />

      <h2 className='interest-rates-title'>
        Interest Rates, Interest Charges, and Fees
        <br />
        Cash Back World Mastercard® Card
      </h2>

      <h4 className='interest-rates-header'>
        Interest Rates and Interest Charges
      </h4>

      <table className='interest-rates-table'>
        <tbody>
          <tr>
            <td>Annual Percentage Rate (APR) for Purchases</td>
            <td>
              0.00% Introductory APR for the first six months.
              <br />
              After that, your APR will be 15.99% to 22.99%, based on your
              creditworthiness.
              <br />
              This APR will vary with the market based on the Prime Rate.
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>APR for Balance Transfers</td>
            <td>
              Your APR will be 15.99% to 22.99%, based on your creditworthiness.
              This APR will vary with the market based on the Prime Rate.
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Annual Percentage Rate (APR) for Purchases</td>
            <td>
              0.00% Introductory APR for the first six months.
              <br />
              After that, your APR will be 15.99% to 22.99%, based on your
              creditworthiness.
              <br />
              This APR will vary with the market based on the Prime Rate.
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>APR for Balance Transfers</td>
            <td>
              Your APR will be 15.99% to 22.99%, based on your creditworthiness.
              This APR will vary with the market based on the Prime Rate.
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className='interest-rates-header'>Fees</h4>

      <table className='interest-rates-table'>
        <tbody>
          <tr>
            <td>Annual Fee</td>
            <td>None</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Transaction Fees</td>
            <td />
          </tr>

          <tr>
            <td>• Balance Transfer</td>
            <td>
              Either $10 or 4% of the amount of each transfer, whichever is
              greater.
            </td>
          </tr>

          <tr>
            <td>• Cash Advance</td>
            <td>
              Either $10 or 4% of the amount of each transfer, whichever is
              greater.
            </td>
          </tr>

          <tr>
            <td>• Foreign Transaction</td>
            <td>
              Either $10 or 4% of the amount of each transfer, whichever is
              greater.
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Penalty Fees</td>
            <td />
          </tr>

          <tr>
            <td>• Late Payment</td>
            <td>Up to $38 (Varies by State. See next page for details.).</td>
          </tr>

          <tr>
            <td>• Returned Payment</td>
            <td>Up to $38 (Varies by State. See next page for details.).</td>
          </tr>
        </tbody>
      </table>

      <p className='interest-rates-legal'>
        How We Will Calculate Your Balance:
        <br />
        <br />
        We will use a method called “average daily balance (including new
        purchases).” See your Credit Card Agreement for more details.
        <br />
        <br />
        Billing rights
        <br />
        <br />
        Information on your rights to dispute transactions and how to exercise
        your rights is provided in your Credit Card Agreement.
        <br />
        <br />
        Late Payment fee for Iowa residents is $27 for the first violation and
        $30 for each subsequent violation within the next six billing cycles.
        For other states the fee is $27 for the first violation and $38 for each
        subsequent violation within the next six billing cycles. If the Late
        Payment fee is greater than the Minimum Payment Due, the fee will be
        equal to the Minimum Payment Due.
        <br />
        <br />
        Returned Payment fee for Iowa residents is $27 for the first violation
        and $30 for each subsequent violation within the next six billing
        cycles. For other states the fee is $27 for the first violation and $38
        for each subsequent violation within the next six billing cycles. If
        Returned Payment fee is greater than the Minimum Payment Due, the fee
        will be equal to the Minimum Payment Due.
        <br />
        <br />
        Interest Charges for Covered Members of the Armed Forces and Their
        Dependents: Federal law provides important protections to members of the
        Armed Forces and their dependents relating to extensions of consumer
        credit. In general, the cost of consumer credit to a member of the Armed
        Forces and his or her dependent may not exceed an annual percentage rate
        of 36%. This rate must include, as applicable to the credit transaction
        or account: the costs associated with credit insurance premiums; fees
        for ancillary products sold in connection with the credit transaction;
        any application fee charged (other than certain application fees for
        specified credit transactions or accounts); and any participation fee
        charged (other. than certain participation fees for a credit card
        account).
        <br />
        <br />
        If you are a covered member of the armed forces or a dependent, you will
        not be charged annual fees, transaction fees, or penalty fees so that
        your cost may not exceed the Military Lending Act annual percentage rate
        cap. Armed Forces members and their dependents can hear about the
        protections provided to them by calling 1-866-761-2689 (TTY users call
        1-800-659-5495).
      </p>
    </main>
  </>
)

export default {
  title: 'Templates'
}
