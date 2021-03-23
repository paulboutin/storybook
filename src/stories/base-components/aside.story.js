import React from 'react'
import { text, array } from '@storybook/addon-knobs'
import { Aside } from '../../components/base/Aside'
import Link from '../../components/base/Link'

const defaultItems = [
  'The Agreement',
  'Liability',
  'Our Relationship',
  'Reservation of Rights',
  'Compliance with Law and Governing Law'
]

export const AsideStory = () => {
  const title = text('Title', 'Content')
  const links = array('Items', defaultItems)

  return (
    <Aside title={title}>
      {links.map(link => (
        <Link href='#'>{link}</Link>
      ))}
    </Aside>
  )
}

AsideStory.story = {
  name: 'Aside'
}

export default {
  title: 'Base Components',
  parameters: {
    'in-dsm': {
      id: '60538cafe8a36b58123509c1'
    }
  }
}
