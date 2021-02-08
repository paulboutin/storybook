import React from 'react'
import classNames from 'classnames'

const ShadowBlock = ({ title, shadowSize, children }) => (
  <div className={classNames('sb:shadow-block', `shadow-${shadowSize}`)}>
    <p>
      <b>{title}</b>
    </p>
    <p>
      <i>{`.shadow-${shadowSize}`}</i>
    </p>
    {children}
  </div>
)

const HoverShadowBlock = ({ title, shadowSize, children }) => (
  <div className={classNames('sb:shadow-block', `hover:shadow-${shadowSize}`)}>
    <p>
      <b>Hover {title}</b>
    </p>
    <p>
      <i>{`.hover:shadow-${shadowSize}`}</i>
    </p>
    {children}
  </div>
)

export const Shadows = () => (
  <>
    <div className='sb:shadows'>
      <ShadowBlock shadowSize='none' title='None' />
      <ShadowBlock shadowSize='sm' title='Small'>
        <p>Offset X 4px</p>
        <p>Offset Y 4px</p>
        <p>Blur 20px</p>
      </ShadowBlock>
      <ShadowBlock shadowSize='md' title='Medium'>
        <p>Offset X 8px</p>
        <p>Offset Y 8px</p>
        <p>Blur 20px</p>
      </ShadowBlock>
      <ShadowBlock shadowSize='lg' title='Large'>
        <p>Offset X 12px</p>
        <p>Offset Y 12px</p>
        <p>Blur 20px</p>
      </ShadowBlock>
    </div>
    <div className='sb:shadows'>
      <HoverShadowBlock shadowSize='none' title='None' />
      <HoverShadowBlock shadowSize='sm' title='Small'>
        <p>Offset X 4px</p>
        <p>Offset Y 4px</p>
        <p>Blur 20px</p>
      </HoverShadowBlock>
      <HoverShadowBlock shadowSize='md' title='Medium'>
        <p>Offset X 8px</p>
        <p>Offset Y 8px</p>
        <p>Blur 20px</p>
      </HoverShadowBlock>
      <HoverShadowBlock shadowSize='lg' title='Large'>
        <p>Offset X 12px</p>
        <p>Offset Y 12px</p>
        <p>Blur 20px</p>
      </HoverShadowBlock>
    </div>
  </>
)

export default {
  title: 'Design System',
  parameters: {
    'in-dsm': {
      id: '6021085701f96f6bced34746'
    }
  }
}
