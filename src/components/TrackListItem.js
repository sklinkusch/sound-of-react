import React, { Component } from 'react'

export default class TrackListItem extends Component {
  constructor(props) {
    super()
  }
  render() {
    const { trackId, artworkUrl100, trackShortName, collectionShortName, artistShortName, releaseDate, trackPrice, currency } = this.props.music;
    return (
      <div className="row">
        <span className="fas fa-play" id="play_${trackId}" />
        <span className="fas fa-pause" id="pause_${trackId}" />
        <audio id="musicplay_${trackId}" loop src=""></audio>
        <img src="${artworkUrl100}" />
        <div>${trackShortName}<br /><span class="small collection">${collectionShortName}</span></div>
        <div>${artistShortName}<br /><span class="small reldate">${(this.getDate(releaseDate))}</span></div>
        <div>${(this.getSongPrice(trackPrice, currency))}</div>
      </div>
    )
  }
}
