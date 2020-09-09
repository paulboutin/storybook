import React from 'react'

const Table = ({ data }) => (
  <div className='table'>
    <table>
      {data.header && (
        <thead>
          {data.header.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <th
                  key={colIndex}
                  dangerouslySetInnerHTML={{ __html: cell.data || cell }}
                  colSpan={cell.cols}
                  rowSpan={cell.rows}
                />
              ))}
            </tr>
          ))}
        </thead>
      )}

      {data.body.map((rowGroup, rowGroupIndex) => (
        <tbody key={rowGroupIndex}>
          {rowGroup.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  dangerouslySetInnerHTML={{ __html: cell.data || cell }}
                  colSpan={cell.cols}
                  rowSpan={cell.rows}
                />
              ))}
            </tr>
          ))}
        </tbody>
      ))}
    </table>
  </div>
)

export default Table
