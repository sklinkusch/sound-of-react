import React from 'react'
import "../styles/SearchBar.css"

export default function SearchBar(props) {
  const inputRef = React.createRef()
  const filterRef = React.createRef()
  const filterPropRef = React.createRef()
  const sortRef = React.createRef()
  return (
    <header>
      <select id="togglesort" name="togglesort" ref={sortRef} onChange={event => props.updateView(filterRef.current.value, filterPropRef.current.value, event.target.value)} >
        <option value="all">Sort by</option>
        <option value="title-asc">Title A-Z</option>
        <option value="title-desc">Title Z-A</option>
        <option value="artist-asc">Artist A-Z</option>
        <option value="artist-desc">Artist Z-A</option>
        <option value="album-asc">Album A-Z</option>
        <option value="album-desc">Album Z-A</option>
        <option value="relDate-asc">Release date (ascending)</option>
        <option value="relDate-desc">Release date (descending)</option>
        <option value="price-asc">Price (ascending)</option>
        <option value="price-desc">Price (descending)</option>
      </select>
      <select name="togglefilter" id="togglefilter" ref={filterPropRef} onChange={event => props.updateView(filterRef.current.value, event.target.value, sortRef.current.value)}>
        <option value="all">Filter by</option>
        <option value="artistName">Artist</option>
        <option value="trackName">Title</option>
        <option value="collectionName">Album</option>
      </select>
      <input type="text" id="filter" placeholder="Enter your filter string" ref={filterRef} onChange={event => props.updateView(event.target.value, filterPropRef.current.value, sortRef.current.value)} />
      <input type="text" id="searchfield" placeholder="Enter your search string" ref={inputRef} />
      <button id="searchbutton" onClick={() => props.searchItems(inputRef.current.value)}>Search</button>
    </header >
  )
}
