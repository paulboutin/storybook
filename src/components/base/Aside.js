import React from 'react'
import Link from './Link'

const AsideLinks = () => {
  return (
    <>
      <Link href='#agreement'>The Agreement</Link>
      <Link href='#liability'>Liability</Link>
      <Link href='#relationship'>Our Relationship</Link>
      <Link href='#rights'>Reservation of Rights</Link>
      <Link href='#compliance'>Compliance with Law and Governing Law</Link>
    </>
  )
}

export const Aside = ({ title, children }) => {
  return (
    <aside className='aside'>
      <h6 className='aside-title'>{title}</h6>
      {children}
    </aside>
  )
}

const DefaultAside = () => {
  return (
    <Aside title='Content'>
      <AsideLinks />
    </Aside>
  )
}

export default DefaultAside
