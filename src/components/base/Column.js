import classNames from 'classnames'
import React from 'react'

export const columnIconConfig = columns => ({
  'col-sm-4': [3, 5, 6].includes(columns),
  'col-sm-6': [2, 4].includes(columns),
  'col-md-3': [4].includes(columns)
})

export const columnThreeColConfig = columns => ({
  'col-sm-6': [2, 4].includes(columns),
  'col-md-4': [3, 5, 6].includes(columns)
})

export const columnInfographicConfig = columns => ({
  'col-sm-6': [2, 4].includes(columns),
  'col-sm-4': [3, 5, 6].includes(columns)
})

const Column = ({
  columns,
  className,
  configFn = columnIconConfig,
  children
}) => (
  <div className={classNames('column col-xs-12', className, configFn(columns))}>
    {children}
  </div>
)

export default Column
