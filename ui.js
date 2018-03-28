import React from 'react'
import randomCombo from 'random-a11y-combo'

import { normalizeHref } from './constants'

const boxStyles = {
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '40px',
  fontFamily: 'sans-serif',
  padding: '20px'
}

export const Layout = ({ children }) => {
  const [ backgroundColor, color ] = randomCombo()
  const style = Object.assign({}, boxStyles, {
    backgroundColor,
    color
  })

  return (
    <div style={style}>
      <title>No.</title>
      <link rel='stylesheet' href={normalizeHref} />
      {children}
    </div>
  )
}
