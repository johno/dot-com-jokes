import React, { Component } from 'react'
import Typing from 'react-typing-animation'

import { dougisms } from './constants'
import { random } from './util'
import { Layout } from './ui'

class No extends Component {
  state = {
    dougism: random(dougisms)
  }

  render() {
    const { dougism } = this.state

    return (
      <Layout>
        <Typing typing={1}>
          {dougism}
        </Typing>
      </Layout>
    )
  }
}

export default No
