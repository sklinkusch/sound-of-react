import React, { Component } from 'react'
import TrackListItem from './TrackListItem';

export default class TrackList extends Component {
  constructor(props) {
    super()
  }
  render() {
    const numTracks = this.props.music.length
    return (
      <div>
        <h1>My Tracks</h1>
        <p>{numTracks} music tracks from iTunes</p>
        {this.props.music && numTracks > 0 ? this.props.music.map((track, index) => <TrackListItem music={track} key={index} />) : <div>No tracks have been found</div>}
      </div>
    )
  }
}
