import React from 'react'
import { useEffect } from '@storybook/addons'

function resize() {
  const iframe = document.querySelector('iframe')
  const body = iframe.contentWindow.document.body
  iframe.parentNode.style.height = `${body.scrollHeight}px`
}

export const FontIcons = () => {
  useEffect(() => {
    document.querySelector('iframe').onload = resize
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  })

  return (
    <div style={{ height: '100vh', margin: '-1rem' }}>
      <iframe src='/icomoon/demo.html' width='100%' height='100%' />
    </div>
  )
}
