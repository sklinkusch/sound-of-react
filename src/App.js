import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';

export default class App extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <TrackList />
      </div>
    );
  }
}
