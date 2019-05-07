import React, { Component } from 'react'

export default class Player extends Component {
  render() {
    return (
      <audio loop src="" ref={this.props.playerRef} />
    )
  }
}
