import React from 'react'
import Accordion from '../base/Accordion'
import Link from '../base/Link'
import Table from '../base/Table'

export const accordionItems = [
  {
    title: "What if I'm under 25?",
    text:
      'If you’re under 25, we’ll waive your monthly service charge even if you don’t make a deposit that month.'
  },
  {
    title: "What if I don't make a deposit one month?",
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus maxime modi repellendus voluptatibus. ' +
      'Ab accusamus delectus eaque facilis itaque quasi repudiandae suscipit unde! Ad blanditiis repellendus sed similique sunt.'
  },
  {
    title: 'How long does it take to open an account?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus maxime modi repellendus voluptatibus. ' +
      'Ab accusamus delectus eaque facilis itaque quasi repudiandae suscipit unde! Ad blanditiis repellendus sed similique sunt.'
  },
  {
    title: 'What do I need to open an account?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus maxime modi repellendus voluptatibus. ' +
      'Ab accusamus delectus eaque facilis itaque quasi repudiandae suscipit unde! Ad blanditiis repellendus sed similique sunt.'
  },
  {
    title: 'What if I want a paper statement?',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus maxime modi repellendus voluptatibus. ' +
      'Ab accusamus delectus eaque facilis itaque quasi repudiandae suscipit unde! Ad blanditiis repellendus sed similique sunt.'
  }
]

export const FAQAccordion = ({ data = [] }) => (
  <>
    {data.map(({ title, text }, idx) => {
      return (
        <Accordion key={idx} title={title} expanded={idx === 0}>
          {text}
        </Accordion>
      )
    })}

    <Link standalone className='faq-link'>
      View All
    </Link>
  </>
)

export const FAQTables = ({ data = [] }) => (
  <>
    {data.map((accordion, index) => (
      <Accordion
        key={index}
        title={accordion.title}
        className='accordion-table'
        expanded={index === 0}
      >
        <Table type='standard' data={accordion.table} />
      </Accordion>
    ))}
  </>
)

const FAQ = ({ heading, children }) => (
  <section className='faq container'>
    <h3
      className='faq-heading text-h2'
      dangerouslySetInnerHTML={{ __html: heading }}
    />
    {children}
  </section>
)

export default FAQ
