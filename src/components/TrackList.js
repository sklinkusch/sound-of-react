import React from 'react'
import TrackListItem from './TrackListItem';
import "../styles/TrackList.css";
import Title from './Title';
import Counter from './Counter';

export default function TrackList(props) {
  const numTracks = props.music.length
  return (
    <main>
      <Title />
      <Counter count={numTracks} />
      {props.music && numTracks > 0 ? props.music.map((track, index) => <TrackListItem music={track} key={index} playMusic={i => props.playMusic(i)} pauseMusic={() => props.pauseMusic()} />) : <div>No tracks have been found</div>}
    </main>
  )
}
