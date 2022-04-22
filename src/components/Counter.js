import React from 'react'
import "../styles/Counter.css";

export default function Counter(props) {
  const { count } = props;
  return (
    <React.Fragment>
      {count > 1 && <p className="trackNum">{count} music tracks from iTunes </p>}
      {count === 1 && <p className="trackNum">{count} music track from iTunes</p>}
      {count === 0 && <p className="trackNum">No music tracks from iTunes</p>}
    </React.Fragment>
  )
}
