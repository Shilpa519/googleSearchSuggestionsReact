import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  arrowClicked = id => {
    const {suggestionsList} = this.props
    const filtered = suggestionsList.filter(eachItem => eachItem.id !== id)
    this.setState({searchInput: filtered})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(
      eachItem =>
        eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
      console.log(suggestionsList),
    )

    return (
      <div className="app-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
        </div>
        <div className="search-container">
          <div className="search-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="search-value"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <div className="search-item-container">
            <ul className="search-item">
              {searchResults.map(eachSearchItem => (
                <SuggestionItem
                  itemsDetails={eachSearchItem}
                  key={eachSearchItem.id}
                  arrow={this.arrowClicked}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
