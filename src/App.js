import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TrackList />
    </div>
  );
}

export default App;
