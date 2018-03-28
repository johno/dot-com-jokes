import React, { Component } from "react"
import Typing from "react-typing-animation"

import { dougisms } from "./constants"
import { random } from "./util"

class No extends Component {
  state = {
    dougism: random(dougisms)
  }

  render() {
    const { dougism } = this.state

    return (
      <div>
        <Typing typing={1}>{dougism}</Typing>
      </div>
    )
  }
}

export default No
