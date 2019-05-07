import React from 'react'
import TrackListItem from './TrackListItem';
import "../styles/TrackList.scss";

export default function TrackList(props) {
  const numTracks = props.music.length
  return (
    <main>
      <h1>My Tracks</h1>
      <p className="trackNum">{numTracks} music tracks from iTunes</p>
      {props.music && numTracks > 0 ? props.music.map((track, index) => <TrackListItem music={track} key={index} playMusic={i => props.playMusic(i)} pauseMusic={() => props.pauseMusic()} />) : <div>No tracks have been found</div>}
    </main>
  )
}
