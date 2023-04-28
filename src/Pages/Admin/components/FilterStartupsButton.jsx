import filterIcon from '../../../assets/filter-search.svg'

const FilterStartupsButton = (props) => {
  return (
    <div className="filter-wrapper">
      <div className="filter-button">
        <button onClick={props.onClick}>
          <img src={filterIcon} />
          <span>Filter</span>
        </button>
      </div>
    </div>
  )
}

export default FilterStartupsButton
