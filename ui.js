import React from 'react'
import styled from 'styled-components'
import randomCombo from 'random-a11y-combo'
import { color, fontSize, space } from 'styled-system'

import { normalizeHref } from './constants'

export const Box = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  ${fontSize};
  ${space};
  ${color}
`

export const Layout = ({ children }) => {
  const [ backgroundColor, color ] = randomCombo()

  return (
    <Box
      color={color}
      bg={backgroundColor}
      f={[3, 4, 5]}
      p={[2, 3, 4]}
    >
      <title>No.</title>
      <link rel='stylesheet' href={normalizeHref} />
      {children}
    </Box>
  )
}
