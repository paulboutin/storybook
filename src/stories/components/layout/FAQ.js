import React from 'react'
import classNames from 'classnames'
import { Link } from '../base/Link'

export const Block = ({ children, question, expanded }) => (
  <div
    className={classNames('faq-block accordion', {
      'accordion-expanded': expanded
    })}
  >
    <div>
      <h6 className='faq-question'>{question}</h6>
      <p className='faq-answer accordion-content'>{children}</p>
    </div>

    <i className='faq-icon fa' />
  </div>
)

export const FAQ = () => (
  <div className='faq container'>
    <h4 className='faq-heading'>
      Still have questions?
      <br />
      We have answers.
    </h4>

    <Block question="What if I'm under 25?" expanded>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores
      cupiditate deleniti dolorem eligendi error hic magnam modi omnis quaerat
      quas quisquam quo sunt totam ullam, unde voluptas. Molestias, ratione.
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

    <Link icon='long-arrow-alt-right' className='faq-link'>
      View All
    </Link>
  </div>
)
