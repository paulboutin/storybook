import React from 'react'
import Navigation from '../../components/layout/Navigation'
import Breadcrumbs from '../../components/base/Breadcrumbs'
import Accordion from '../../components/base/Accordion'
import Link from '../../components/base/Link'
import Footer from '../../components/layout/Footer'

export const AccountDisclosure = () => {
  const sections = [
    'Deposit account agreement your account agreement with Bank of the West',
    'Important definitions',
    'When you open your account',
    'General information about deposit accounts',
    'Deposit to your accounts',
    'Checks',
    'Funds availability policy',
    'Substitute checks and your rights'
  ]
  const subSections = [
    'The Agreement',
    'Liability',
    'Our Relationship',
    'Reservation of Rights',
    'Compliance with Law and Governing Law'
  ]

  return (
    <>
      <Navigation />

      <main className='account-disclosure container'>
        <h2>Deposit Account Disclosure</h2>
        <p>
          and Safe Deposit Box Rental Agreement Terms and Conditions For
          Personal Accounts, Effective December 1, 2019
        </p>

        <h4 className='account-disclosure-title'>Content index</h4>

        {sections.map((section, sectionIndex) => (
          <Accordion key={sectionIndex} title={section}>
            {subSections.map((subSection, subSectionIndex) => (
              <Link
                key={subSectionIndex}
                href={`#section-${sectionIndex}-${subSectionIndex}`}
              >
                {subSection}
              </Link>
            ))}
          </Accordion>
        ))}

        {sections.map((section, sectionIndex) => (
          <section key={sectionIndex}>
            <h4 className='account-disclosure-header'>{section}</h4>

            {subSections.map((subSection, subSectionIndex) => (
              <section key={subSectionIndex}>
                <h6
                  className='account-disclosure-section-title'
                  id={`section-${sectionIndex}-${subSectionIndex}`}
                >
                  {subSection}
                </h6>
                <p>
                  You agree that your use of Bank of the West's website ("Site")
                  is governed by the laws of the State of California and any
                  applicable federal United States laws. For individual products
                  and services offered by Bank of the West, the applicable
                  customer agreements and disclosures may specify that the laws
                  of another jurisdiction will govern your use of the account
                  and/or service, and the terms of those disclosures and
                  agreements will continue to apply. If you access this Site
                  from other locations, you do so on your own initiative and you
                  are responsible for complying with applicable local laws. Bank
                  of the West does not represent that the materials in this Site
                  are appropriate or available for use in all locations. Access
                  to this Site from locations where the contents of this Site
                  are illegal or penalized is prohibited. This Site is not
                  intended for children under the age of 13. Please do not
                  access or use this Site if you are under 13 years of age. By
                  using this Site, you affirm that you are over the age of 13.
                </p>
              </section>
            ))}
          </section>
        ))}

        <Breadcrumbs
          items={[
            'Home',
            'Checking',
            'Any Deposit Checking',
            'Deposit Account Disclosure'
          ]}
        />

        <Footer />
      </main>
    </>
  )
}

export default {
  title: 'Templates',
  parameters: {
    'in-dsm': {
      id: '5f6a4f479bb12c477da2efbe'
    }
  }
}
