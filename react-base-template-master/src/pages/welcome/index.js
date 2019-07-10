import React, { Component } from 'react'

import HelloComponent from 'Components/HelloComponent'

class Welcome extends Component {
  state = {
    text: 'Hello World'
  }

  render() {
    return <HelloComponent message={this.state.text} />
  }
}

export default Welcome
