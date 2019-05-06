import React, { Component } from 'react'

export default class TrackListItem extends Component {
  constructor(props) {
    super()
  }
  getDate(rawDate) {
    return `${(rawDate.substr(8, 2))}.${(rawDate.substr(5, 2))}.${(rawDate.substr(0, 4))}`
  }
  getSongPrice(rawPrice, rawCurrency) {
    if (rawPrice === -1) {
      return "Album only"
    }
    let currency = "";
    switch (rawCurrency) {
      // US Dollar
      case "USD":
        currency = "$"
        break
      // Canadian Dollar
      case "CAD":
        currency = "C$"
        break
      // Australian Dollar
      case "AUD":
        currency = "A$"
        break
      // Euro
      case "EUR":
        currency = "€"
        break
      // Japanese Yen and Chinese Renminbi
      case "JPY":
      case "CNY":
        currency = "¥"
        break
      // British Pound
      case "GBP":
        currency = "£"
        break
      default:
        currency = rawCurrency
    }
    return `${(Number(rawPrice).toFixed(2))} ${currency}`
  }
  render() {
    const { trackId, artworkUrl100, trackName, collectionName, artistName, releaseDate, trackPrice, currency } = this.props.music;
    const playId = `play_${trackId}`
    const pauseId = `pause_${trackId}`
    const playerId = `musicplay_${trackId}`
    let trackShortName;
    let collectionShortName;
    let artistShortName;
    if (trackName) {
      if (trackName.length > 40) {
        trackShortName = trackName.substr(0, 40) + "..."
      } else {
        trackShortName = trackName
      }
    } else {
      trackShortName = trackName
    }
    if (collectionName) {
      if (collectionName.length > 40) {
        collectionShortName = collectionName.substr(0, 40) + "..."
      } else {
        collectionShortName = collectionName
      }
    } else {
      collectionShortName = collectionName
    }
    if (artistName) {
      if (artistName.length > 40) {
        artistShortName = artistName.substr(0, 40) + "..."
      } else {
        artistShortName = artistName
      }
    } else {
      artistShortName = artistName
    }
    return (
      <div className="row">
        <span className="fas fa-play" id={playId} />
        <span className="fas fa-pause" id={pauseId} />
        <audio id={playerId} loop src=""></audio>
        <img src={artworkUrl100} alt="cover" />
        <div>{trackShortName}<br /><span className="small collection">{collectionShortName}</span></div>
        <div>{artistShortName}<br /><span className="small reldate">{(this.getDate(releaseDate))}</span></div>
        <div>{(this.getSongPrice(trackPrice, currency))}</div>
      </div>
    )
  }
}
