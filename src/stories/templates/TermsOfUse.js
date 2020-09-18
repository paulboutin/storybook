import React from 'react'
import Breadcrumbs from '../../components/base/Breadcrumbs'
import Link from '../../components/base/Link'
import Navigation from '../../components/layout/Navigation'

export const TermsOfUse = () => (
  <>
    <Navigation />

    <main className='terms-of-use container'>
      <Breadcrumbs
        items={['Home', 'Credit Cards', 'Cash Back Card', 'Terms of Use']}
      />

      <section className='tos-wrapper'>
        <aside className='tos-contents'>
          <h6 className='tos-contents-title'>Content</h6>
          <Link href='#agreement'>The Agreement</Link>
          <Link href='#liability'>Liability</Link>
          <Link href='#relationship'>Our Relationship</Link>
          <Link href='#rights'>Reservation of Rights</Link>
          <Link href='#compliance'>Compliance with Law and Governing Law</Link>
        </aside>

        <div>
          <h2 className='tos-title'>Terms of Use</h2>
          <p>
            Your use of any portion of Bank of the West's Web site is subject to
            the following terms and conditions ("Terms"):
          </p>

          <h6 className='tos-title' id='agreement'>
            The agreement
          </h6>
          <p>
            You agree that your use of Bank of the West's website ("Site") is
            governed by the laws of the State of California and any applicable
            federal United States laws. For individual products and services
            offered by Bank of the West, the applicable customer agreements and
            disclosures may specify that the laws of another jurisdiction will
            govern your use of the account and/or service, and the terms of
            those disclosures and agreements will continue to apply. If you
            access this Site from other locations, you do so on your own
            initiative and you are responsible for complying with applicable
            local laws. Bank of the West does not represent that the materials
            in this Site are appropriate or available for use in all locations.
            Access to this Site from locations where the contents of this Site
            are illegal or penalized is prohibited. This Site is not intended
            for children under the age of 13. Please do not access or use this
            Site if you are under 13 years of age. By using this Site, you
            affirm that you are over the age of 13.
          </p>

          <h6 className='tos-title' id='liability'>
            Liability
          </h6>
          <p>
            You agree that your use of Bank of the West's website ("Site") is
            governed by the laws of the State of California and any applicable
            federal United States laws. For individual products and services
            offered by Bank of the West, the applicable customer agreements and
            disclosures may specify that the laws of another jurisdiction will
            govern your use of the account and/or service, and the terms of
            those disclosures and agreements will continue to apply. If you
            access this Site from other locations, you do so on your own
            initiative and you are responsible for complying with applicable
            local laws. Bank of the West does not represent that the materials
            in this Site are appropriate or available for use in all locations.
            Access to this Site from locations where the contents of this Site
            are illegal or penalized is prohibited. This Site is not intended
            for children under the age of 13. Please do not access or use this
            Site if you are under 13 years of age. By using this Site, you
            affirm that you are over the age of 13.
          </p>

          <h6 className='tos-title' id='relationship'>
            Our relationship
          </h6>
          <p>
            You agree that your use of Bank of the West's website ("Site") is
            governed by the laws of the State of California and any applicable
            federal United States laws. For individual products and services
            offered by Bank of the West, the applicable customer agreements and
            disclosures may specify that the laws of another jurisdiction will
            govern your use of the account and/or service, and the terms of
            those disclosures and agreements will continue to apply. If you
            access this Site from other locations, you do so on your own
            initiative and you are responsible for complying with applicable
            local laws. Bank of the West does not represent that the materials
            in this Site are appropriate or available for use in all locations.
            Access to this Site from locations where the contents of this Site
            are illegal or penalized is prohibited. This Site is not intended
            for children under the age of 13. Please do not access or use this
            Site if you are under 13 years of age. By using this Site, you
            affirm that you are over the age of 13.
          </p>

          <h6 className='tos-title' id='rights'>
            Reservation of Rights
          </h6>
          <p>
            You agree that your use of Bank of the West's website ("Site") is
            governed by the laws of the State of California and any applicable
            federal United States laws. For individual products and services
            offered by Bank of the West, the applicable customer agreements and
            disclosures may specify that the laws of another jurisdiction will
            govern your use of the account and/or service, and the terms of
            those disclosures and agreements will continue to apply. If you
            access this Site from other locations, you do so on your own
            initiative and you are responsible for complying with applicable
            local laws. Bank of the West does not represent that the materials
            in this Site are appropriate or available for use in all locations.
            Access to this Site from locations where the contents of this Site
            are illegal or penalized is prohibited. This Site is not intended
            for children under the age of 13. Please do not access or use this
            Site if you are under 13 years of age. By using this Site, you
            affirm that you are over the age of 13.
          </p>

          <h6 className='tos-title' id='compliance'>
            Compliance with Law and Governing Law
          </h6>
          <p>
            You agree that your use of Bank of the West's website ("Site") is
            governed by the laws of the State of California and any applicable
            federal United States laws. For individual products and services
            offered by Bank of the West, the applicable customer agreements and
            disclosures may specify that the laws of another jurisdiction will
            govern your use of the account and/or service, and the terms of
            those disclosures and agreements will continue to apply. If you
            access this Site from other locations, you do so on your own
            initiative and you are responsible for complying with applicable
            local laws. Bank of the West does not represent that the materials
            in this Site are appropriate or available for use in all locations.
            Access to this Site from locations where the contents of this Site
            are illegal or penalized is prohibited. This Site is not intended
            for children under the age of 13. Please do not access or use this
            Site if you are under 13 years of age. By using this Site, you
            affirm that you are over the age of 13.
          </p>
        </div>
      </section>
    </main>
  </>
)
