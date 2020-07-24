import React from 'react'
import Link from '../base/Link'
import classNames from 'classnames'

const Block = ({ children, question, expanded }) => (
  <div
    className={classNames('faq-block accordion', {
      'accordion-expanded': expanded
    })}
  >
    <div>
      <h5 className='faq-question'>{question}</h5>
      <p className='faq-answer accordion-content'>{children}</p>
    </div>

    <i className='faq-icon fa' />
  </div>
)

const FAQ = () => (
  <div className='faq container'>
    <h2 className='faq-heading'>
      Still have questions?
      <br />
      We have answers.
    </h2>

    <Block question="What if I'm under 25?" expanded>
      If you’re under 25, we’ll waive your monthly service charge even if you
      don’t make a deposit that month.
    </Block>

    <Block question="What if I don't make a deposit one month?">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ducimus
      maxime modi repellendus voluptatibus. Ab accusamus delectus eaque facilis
      itaque quasi repudiandae suscipit unde! Ad blanditiis repellendus sed
      similique sunt.
    </Block>

    <Block question='How long does it take to open an account?'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias
      architecto, commodi culpa, deserunt dolore earum eos est harum iste itaque
      maiores maxime natus nostrum, nulla quasi quis tenetur voluptates.
    </Block>

    <Block question='What do I need to open an account?'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
      blanditiis culpa deleniti dolorem doloribus eveniet exercitationem fugiat
      itaque magnam minima minus nobis quam quisquam recusandae repellat, saepe
      sapiente tempora!
    </Block>

    <Block question='What if I want a paper statement?'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur
      dolor illo ipsam, minus praesentium quos sint. Doloribus dolorum eveniet
      illum ipsa nostrum porro quae, quas reiciendis reprehenderit soluta,
      voluptate?
    </Block>

    <Link standalone className='faq-link'>
      View All
    </Link>
  </div>
)

export { Block as FAQBlock }

export default FAQ
