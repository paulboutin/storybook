import { buildSnapshotTests } from '../utils'

describe('Layout Components', () => {
  const stories = [
    {
      title: 'legal',
      component: 'legal'
    },
    {
      title: 'list-element standard',
      component: 'list-element-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Standard'
    },
    {
      title: 'list-element alt',
      component: 'list-element-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Alt'
    },
    {
      title: 'closing-cta standard',
      component: 'closing-cta-story',
      'knob-Type': 'Standard'
    },
    {
      title: 'closing-cta alt',
      component: 'closing-cta-story',
      'knob-Type': 'Alt'
    },
    {
      title: 'closing-cta half',
      component: 'closing-cta-story',
      'knob-Type': 'Half'
    },
    {
      title: 'hero full',
      component: 'hero-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Full'
    },
    {
      title: 'hero spaced',
      component: 'hero-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Spaced'
    },
    {
      title: 'recommendations',
      component: 'recommendations-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'faq',
      component: 'faq',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'promo-element standard',
      component: 'promo-element-story',
      'knob-Type': 'Standard'
    },
    {
      title: 'promo-element full',
      component: 'promo-element-story',
      'knob-Type': 'Full'
    },
    {
      title: 'promo-element accent square',
      component: 'promo-element-story',
      'knob-Type': 'Accent Square'
    },
    {
      title: 'promo-element accent dark',
      component: 'promo-element-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Accent Dark'
    },
    {
      title: 'highlight single',
      component: 'highlight-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Single'
    },
    {
      title: 'highlight overlap color',
      component: 'highlight-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Overlap',
      'knob-Overlap': 'Color'
    },
    {
      title: 'highlight overlap image',
      component: 'highlight-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Type': 'Overlap',
      'knob-Overlap': 'Image'
    },
    {
      title: 'column cards',
      component: 'column-cards-story'
    },
    {
      title: 'column-icons normal',
      component: 'column-icons-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Columns_config': 4,
      'knob-Inverted_config': false
    },
    {
      title: 'column-icons inverted',
      component: 'column-icons-story',
      devices: ['mobile', 'tablet', 'desktop'],
      'knob-Columns_config': 5,
      'knob-Inverted_config': true
    },
    {
      title: 'form single column',
      component: 'form',
      devices: ['mobile'],
      'knob-Type': '1'
    },
    {
      title: 'form two columns',
      component: 'form',
      devices: ['mobile'],
      'knob-Type': '2'
    },
    {
      title: 'infographic',
      component: 'infographic-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'pull-quote',
      component: 'pull-quote-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'video-hero',
      component: 'video-hero-story'
    },
    {
      title: 'dropdown-hero',
      component: 'dropdown-hero-story'
    },
    {
      title: 'resource-links',
      component: 'resource-links',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'carousel',
      component: 'carousel-story',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'articles',
      component: 'articles',
      devices: ['mobile', 'tablet', 'desktop']
    },
    {
      title: 'footer',
      component: 'footer',
      devices: ['tablet', 'desktop']
    },
    {
      title: 'footer',
      component: 'footer',
      devices: ['mobile'],
      callback: async () => {
        await page.click('.accordion:first-of-type')
        await page.click('.accordion:last-of-type')
        await page.waitForTransition('.accordion-content')
      }
    },
    {
      title: 'navigation main menu',
      component: 'navigation',
      devices: ['mobile', 'tablet'],
      fullPage: true,
      callback: async () => {
        await page.click('.hamburger')
        await page.waitForTransition('.navigation-main-menu')
      }
    },
    {
      title: 'navigation login menu',
      component: 'navigation',
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
      component: 'navigation',
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
      component: 'navigation',
      devices: ['desktop'],
      fullPage: true,
      callback: async () => {
        await page.hover('.navigation-header-product')
        await page.hover('.navigation-dropdown-item')
      }
    }
  ]
  buildSnapshotTests('components-layout')(stories)
})
