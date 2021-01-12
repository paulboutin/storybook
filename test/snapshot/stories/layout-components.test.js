import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = [
    {
      title: 'legal',
      path: 'layout-components--legal-story'
    },
    ...['standard', 'alt'].map(type => ({
      title: `list-element ${type}`,
      path: `layout-components-list-element--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['standard', 'background-image', 'two-column'].map(type => ({
      title: `closing-cta ${type}`,
      path: `layout-components-closing-cta--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['spaced', 'full'].map(type => ({
      title: `hero ${type}`,
      path: `layout-components-hero--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    {
      title: 'cards-three-column',
      path: 'layout-components--cards-three-column',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'faq',
      path: 'layout-components--faq-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    ...['standard', 'alt', 'accent-square', 'accent-dark'].map(type => ({
      title: `promo-element ${type}`,
      path: `layout-components-promo-element--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    ...['single', 'overlap-image', 'overlap-color'].map(type => ({
      title: `highlight ${type}`,
      path: `layout-components-content-highlight--${type}`,
      devices: ['mobile', 'tablet', 'desktop']
    })),
    {
      title: 'column cards',
      path: 'layout-components--column-cards-story'
    },
    {
      title: 'column-icons normal',
      path: 'layout-components-content-highlight--column-icons-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Columns_config': 4,
      'knob-Inverted_config': false
    },
    {
      title: 'column-icons inverted',
      path: 'layout-components-content-highlight--column-icons-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Columns_config': 5,
      'knob-Inverted_config': true
    },
    ...['single-column', 'two-column-background'].map(type => ({
      title: `form ${type}`,
      path: `layout-components-form--${type}`,
      devices: ['mobile']
    })),
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
      path: 'layout-components-hero--video'
    },
    {
      title: 'dropdown-hero',
      path: 'layout-components-hero--dropdown-hero-story'
    },
    {
      title: 'resource-links',
      path: 'layout-components--resource-links-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'carousel',
      path: 'layout-components--carousel-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'cards-horizontal-list',
      path: 'layout-components--cards-horizontal-list-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'footer',
      path: 'layout-components--footer-story',
      devices: ['tablet', 'desktop']
    },
    {
      title: 'footer',
      path: 'layout-components--footer-story',
      devices: ['mobile'],
      callback: async () => {
        await page.click('.accordion:first-of-type')
        await page.click('.accordion:last-of-type')
        await page.waitForTransition('.accordion-content')
      }
    },
    {
      title: 'navigation main menu',
      path: 'layout-components--navigation-story',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
      }
    },
    {
      title: 'navigation login menu',
      path: 'layout-components--navigation-story',
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
      path: 'layout-components--navigation-story',
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
      path: 'layout-components--navigation-story',
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
      path: 'layout-components--help-outro-story'
    },
    {
      title: 'callout',
      path: 'layout-components--callout-story'
    }
  ]
  buildSnapshotTests(stories)
})
