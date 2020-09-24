import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = [
    {
      title: 'legal',
      path: 'layout-components--legal'
    },
    {
      title: 'list-element standard',
      path: 'layout-components-list-element--standard',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'list-element alt',
      path: 'layout-components-list-element--image',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'closing-cta standard',
      path: 'layout-components-closing-cta--standard'
    },
    {
      title: 'closing-cta background-image',
      path: 'layout-components-closing-cta--background-image'
    },
    {
      title: 'closing-cta two-columns',
      path: 'layout-components-closing-cta--two-columns'
    },
    {
      title: 'hero full',
      path: 'layout-components-hero--full',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'hero spaced',
      path: 'layout-components-hero--spaced',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'cards-three-column',
      path: 'layout-components--cards-three-column-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'faq',
      path: 'layout-components--faq',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'promo-element standard',
      path: 'layout-components-promo-element--standard'
    },
    {
      title: 'promo-element alt',
      path: 'layout-components-promo-element--alt'
    },
    {
      title: 'promo-element accent square',
      path: 'layout-components-promo-element--accent-square'
    },
    {
      title: 'promo-element accent dark',
      path: 'layout-components-promo-element--accent-dark'
    },
    {
      title: 'highlight single',
      path: 'layout-components-content-highlight--single',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'highlight overlap image',
      path: 'layout-components-content-highlight--overlap-image',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'highlight overlap color',
      path: 'layout-components-content-highlight--overlap-color',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'column cards',
      path: 'layout-components--column-cards-story'
    },
    {
      title: 'column-icons normal',
      path: 'layout-components--column-icons-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Columns_config': 4,
      'knob-Inverted_config': false
    },
    {
      title: 'column-icons inverted',
      path: 'layout-components--column-icons-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Columns_config': 5,
      'knob-Inverted_config': true
    },
    {
      title: 'form single column',
      path: 'layout-components-form--single-column',
      devices: ['mobile']
    },
    {
      title: 'form two columns',
      path: 'layout-components-form--two-column-background',
      devices: ['mobile']
    },
    {
      title: 'infographic',
      path: 'layout-components--infographic-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'pull-quote',
      path: 'layout-components--pull-quote-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'popup-video',
      path: 'layout-components--popup-video-story'
    },
    {
      title: 'video-hero',
      path: 'layout-components--video-hero-story'
    },
    {
      title: 'dropdown-hero',
      path: 'layout-components--dropdown-hero-story'
    },
    {
      title: 'resource-links',
      path: 'layout-components--resource-links',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'carousel',
      path: 'layout-components--carousel-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'cards-horizontal-list',
      path: 'layout-components--cards-horizontal-list',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'footer',
      path: 'layout-components--footer',
      devices: ['tablet', 'desktop']
    },
    {
      title: 'footer',
      path: 'layout-components--footer',
      devices: ['mobile'],
      callback: async () => {
        await page.click('.accordion:first-of-type')
        await page.click('.accordion:last-of-type')
        await page.waitForTransition('.accordion-content')
      }
    },
    {
      title: 'navigation main menu',
      path: 'layout-components--navigation',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
      }
    },
    {
      title: 'navigation login menu',
      path: 'layout-components--navigation',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
        await page.click('#navigation-login-button')
        await page.waitForTransition('.navigation-login-menu')
      }
    },
    {
      title: 'navigation category menu',
      path: 'layout-components--navigation',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
        await page.click('.navigation-main-menu-category')
        await page.waitForTransition('.navigation-category-menu')
        await page.click('.accordion')
        await page.waitForTransition('.accordion-content')
      }
    },
    {
      title: 'navigation',
      path: 'layout-components--navigation',
      devices: ['desktop'],
      fullPage: true,
      callback: async () => {
        await page.hover('.navigation-header-product')
        await page.hover('.navigation-dropdown-item')
      }
    },
    {
      title: 'comparison cards',
      path: 'layout-components-comparison--cards',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'comparison cards highlight',
      path: 'layout-components-comparison--cards',
      devices: ['desktop'],
      'knob-Style': 'Highlight'
    },
    {
      title: 'comparison cards branded',
      path: 'layout-components-comparison--cards',
      devices: ['desktop'],
      'knob-Style': 'Branded'
    },
    {
      title: 'comparison table',
      path: 'layout-components-comparison--table',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'help intro',
      path: 'layout-components--help-intro-story'
    },
    {
      title: 'help outro',
      path: 'layout-components--help-outro'
    },
    {
      title: 'callout',
      path: 'layout-components--callout-story'
    }
  ]
  buildSnapshotTests(stories)
})
