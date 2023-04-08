import './index.css'

const SuggestionItem = props => {
  const {itemsDetails, arrow} = props
  const {suggestion, id} = itemsDetails
  console.log(suggestion)

  const arrows = () => {
    arrow(id)
  }

  return (
    <li>
      <p className="search-value">{suggestion}</p>
      <button type="button" onClick={arrows}>
        <span>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </span>
      </button>
    </li>
  )
}

export default SuggestionItem
