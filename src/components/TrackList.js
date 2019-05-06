import React, { Component } from 'react'
import TrackListItem from './TrackListItem';

export default class TrackList extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div>
        <h1>My Tracks</h1>
        <p>NUM music tracks from iTunes</p>
        {this.props.music && this.props.music.length > 0 ? this.props.music.map(track => <TrackListItem />) : <div>No tracks have been found</div>}
      </div>
    )
  }
}
