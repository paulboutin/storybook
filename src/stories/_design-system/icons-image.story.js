import React from 'react'

const icons = [
  {
    name: 'Account Statements',
    src: '/icons/img/account-statements.svg'
  },
  {
    name: 'Activate New Card',
    src: '/icons/img/activate-new-card.svg'
  },
  {
    name: 'Balance Transfer',
    src: '/icons/img/balance-transfer.svg'
  },
  {
    name: 'Bill Pay',
    src: '/icons/img/bill-pay.svg'
  },
  {
    name: 'Card Services',
    src: '/icons/img/card-services.svg'
  },
  {
    name: 'CC Options',
    src: '/icons/img/cc-options.svg'
  },
  {
    name: 'Deposit Check',
    src: '/icons/img/deposit-check.svg'
  },
  {
    name: 'Email Preferences',
    src: '/icons/img/email-preferences.svg'
  },
  {
    name: 'Face ID',
    src: '/icons/img/face-id.svg'
  },
  {
    name: 'History',
    src: '/icons/img/history.svg'
  },
  {
    name: 'Location',
    src: '/icons/img/location.svg'
  },
  {
    name: 'Lock Card',
    src: '/icons/img/lock-card.svg'
  },
  {
    name: 'Lost Card',
    src: '/icons/img/lost-card.svg'
  },
  {
    name: 'Make External Transfer',
    src: '/icons/img/make-external-transfer.svg'
  },
  {
    name: 'Make Payment',
    src: '/icons/img/make-payment.svg'
  },
  {
    name: 'Manage Card Alerts',
    src: '/icons/img/manage-card-alerts.svg'
  },
  {
    name: 'Manage Payees',
    src: '/icons/img/manage-payees.svg'
  },
  {
    name: 'Mobile PIN',
    src: '/icons/img/mobile-pin.svg'
  },
  {
    name: 'Online Service Agreement',
    src: '/icons/img/online-service-agreement.svg'
  },
  {
    name: 'Order Replacement',
    src: '/icons/img/order-replacement.svg'
  },
  {
    name: 'Paperless',
    src: '/icons/img/paperless.svg'
  },
  {
    name: 'Pending Payments',
    src: '/icons/img/pending-payments.svg'
  },
  {
    name: 'Privacy And Documents',
    src: '/icons/img/privacy-and-documents.svg'
  },
  {
    name: 'Quick Balance',
    src: '/icons/img/quick-balance.svg'
  },
  {
    name: 'Request Change PIN',
    src: '/icons/img/request-change-pin.svg'
  },
  {
    name: 'Request Increase Limit',
    src: '/icons/img/request-increase-limit.svg'
  },
  {
    name: 'Schedule Transfer',
    src: '/icons/img/schedule-transfer.svg'
  },
  {
    name: 'Send Money',
    src: '/icons/img/send-money.svg'
  },
  {
    name: 'Send',
    src: '/icons/img/send.svg'
  },
  {
    name: 'Split',
    src: '/icons/img/split.svg'
  },
  {
    name: 'Support',
    src: '/icons/img/support.svg'
  },
  {
    name: 'Text Banking',
    src: '/icons/img/text-banking.svg'
  },
  {
    name: 'Transfer Between Accounts',
    src: '/icons/img/transfer-between-accounts.svg'
  },
  {
    name: 'Travel Notice',
    src: '/icons/img/travel-notice.svg'
  },
  {
    name: 'Zelle®',
    src: '/icons/img/zelle.svg'
  }
]

export const ImageIcons = () => (
  <div className='sb:image-icons'>
    {icons.map((icon, index) => (
      <div key={index} className='sb:image-icon'>
        <img src={icon.src} alt={icon.name} />
        <p>{icon.name}</p>
      </div>
    ))}

    {/* Align last row to the left */}
    <div className='sb:image-icon-filler' />
    <div className='sb:image-icon-filler' />
    <div className='sb:image-icon-filler' />
    <div className='sb:image-icon-filler' />
  </div>
)

export default {
  title: 'Design System',
  parameters: {
    'in-dsm': {
      id: '5f6b9e66230daf00809b8f67'
    }
  }
}
