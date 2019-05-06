import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import TrackList from './components/TrackList';

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      music: []
    }
  }
  componentDidMount() {
    const searchValue = "Elvis Presley"
    this.searchItems(searchValue)
  }
  searchItems(searchValue) {
    const urlSearchValue = searchValue.replace(" ", "%20")
    let url = `https://dci-fbw12-search-itunes.now.sh/?term=${urlSearchValue}&media=music`
    fetch(url)
      .then(response => {
        return response.json()
      }).then((data) => {
        this.updateData(data.results)
      }).catch(function (err) {
        console.log("Something went wrong" + err)
      })
  }
  render() {
    return (
      <div className="App">
        <SearchBar onClick={i => this.searchItems(i)} />
        <TrackList music={this.state.music} />
      </div>
    );
  }
  updateData(results) {
    this.setState({ music: results })
  }
}
