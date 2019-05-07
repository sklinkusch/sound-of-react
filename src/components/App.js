import React, { Component } from 'react';
import SearchBar from './SearchBar';
import TrackList from './TrackList';
import Player from './Player';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.playerRef = React.createRef()
    this.state = {
      music: [],
    }
  }
  componentDidMount() {
    const searchValue = "Elvis Presley"
    this.searchItems(searchValue)
  }
  filterArray(filterValue, filterProperty) {
    return this.state.music.filter(track => {
      let filterBool = false
      if (filterProperty === "all") {
        if (
          track.trackName.toLowerCase().includes(filterValue.toLowerCase()) ||
          track.artistName.toLowerCase().includes(filterValue.toLowerCase()) ||
          track.collectionName.toLowerCase().includes(filterValue.toLowerCase())
        ) {
          filterBool = true
        }
      } else {
        if (
          track[filterProperty]
            .toLowerCase()
            .includes(filterValue.toLowerCase())
        ) {
          filterBool = true
        }
      }
      return filterBool
    })
  }
  modViewData(newData) {
    this.setState({ viewData: newData })
  }
  pauseMusic() {
    const player = this.playerRef;
    player.current.pause();
    player.current.src = "";
  }
  playMusic(musicUrl) {
    const player = this.playerRef;
    player.current.src = musicUrl;
    player.current.play();
  }
  render() {
    const music = this.state.viewData || this.state.music
    return (
      <div className="App">
        <SearchBar searchItems={i => this.searchItems(i)} updateView={(i, j, k) => this.updateView(i, j, k)} />
        <Player playerRef={this.playerRef} />
        <TrackList music={music} playMusic={(i) => this.playMusic(i)} pauseMusic={() => this.pauseMusic()} />
      </div>
    );
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
  sortAlphabet(data, property, direction) {
    let mapped = data.map((track, index) => {
      let prop
      if (track[property] === undefined) {
        prop = ""
      } else {
        prop = track[property]
      }
      return { index: index, value: prop }
    })
    let nameA, nameB
    mapped.sort((a, b) => {
      nameA = a.value.toUpperCase()
      nameB = b.value.toUpperCase()
      if (nameA < nameB) {
        return -1 * direction
      } else if (nameA > nameB) {
        return 1 * direction
      }
      return 0
    })
    const sortedTracks = mapped.map(tracknr => {
      return data[tracknr.index]
    })
    return sortedTracks
  }
  sortPricing(data, direction) {
    // TODO: Create a Methode to sort by pricing
    let mapped = data.map((track, index) => {
      return { index: index, value: track.trackPrice }
    })
    mapped.sort((a, b) => {
      return (a.value - b.value) * direction
    })
    const sortedTracks = mapped.map(tracknr => {
      return data[tracknr.index]
    })
    return sortedTracks
  }
  updateData(results) {
    this.setState({ music: results })
  }
  updateView(filterValue, filterProperty, sortValue) {
    const filtered =
      filterValue === "" || typeof filterValue === undefined
        ? this.state.music
        : this.filterArray(filterValue, filterProperty)
    let sorted
    switch (sortValue) {
      case "artist-asc":
        sorted = this.sortAlphabet(filtered, "artistName", 1)
        break
      case "artist-desc":
        sorted = this.sortAlphabet(filtered, "artistName", -1)
        break
      case "title-asc":
        sorted = this.sortAlphabet(filtered, "trackName", 1)
        break
      case "title-desc":
        sorted = this.sortAlphabet(filtered, "trackName", -1)
        break
      case "album-asc":
        sorted = this.sortAlphabet(filtered, "collectionName", 1)
        break
      case "album-desc":
        sorted = this.sortAlphabet(filtered, "collectionName", -1)
        break
      case "relDate-asc":
        sorted = this.sortAlphabet(filtered, "releaseDate", 1)
        break
      case "relDate-desc":
        sorted = this.sortAlphabet(filtered, "releaseDate", -1)
        break
      case "price-asc":
        sorted = this.sortPricing(filtered, 1)
        break
      case "price-desc":
        sorted = this.sortPricing(filtered, -1)
        break
      default:
        sorted = filtered
    }
    this.modViewData(sorted)
  }
}
