import React from 'react'

const Legal = () => {
  const items = [
    '$10.00 monthly service charge waived with one deposit of any amount each statement cycle. Deposits include direct deposit, mobile deposit, ATM deposit, or in-branch deposit of any amount. Does not include fund transfers between Bank of the West accounts or any credits from Bank of the West. Opening deposit can be any amount. No monthly service charge if any account owner is under 25 of age.',
    'Mobile deposits made before 7 pm PT will be processed the same business day and made available within two business days. Longer delays may apply based on the type of items deposited, amount of the deposit, account history or if you have recently opened your account with us.',
    "Enrollment in Online Banking and download of our Mobile App required. Wireless carriers may charge fees for text transmissions or data usage. Message frequency depends on account settings. Text HELP to BKWST (25978) for help. Availability of Mobile Banking may be affected by your mobile device's coverage area. Requires mobile phone with text messaging capabilities. Mobile Banking requires an internet-ready phone and is supported on Apple iPhone devices with iOS 9 and greater and on Android mobile devices with OS 5 and greater."
  ]

  return (
    <div className='legal container'>
      <h5 className='legal-heading'>All the legal stuff</h5>
      <ol className='legal-list'>
        {items.map((item, index) => (
          <li key={index} className='legal-list-item'>
            {item}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default Legal
