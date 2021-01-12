import React from 'react'
import Table from '../../../components/base/Table'

export const Alt = () => {
  const data = {
    header: [['91 Day Deposit*', 'Interest Rate', 'APR']],
    body: [
      [['$2,500 to $9,999', '0.03%', '0.03%']],
      [['$10,000 to $24,999', '0.03%', '0.03%']],
      [['$25,000 to $49,999', '0.03%', '0.03%']],
      [['$50,000 to $99,999', '0.03%', '0.03%']],
      [['$100,000+', '0.03%', '0.03%']]
    ]
  }
  return <Table type='alt' data={data} />
}

export default {
  title: 'Base Components/Table/Alt',
  parameters: {
    'in-dsm': {
      id: '5f6e640cc55519cb19068937'
    }
  }
}
