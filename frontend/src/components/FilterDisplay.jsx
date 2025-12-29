const FilterDisplay = (props) => (
  <>
    <label htmlFor="filter-display">Filter for:</label>
    <select
      name="filter-display"
      id="filter-display"
      onChange={props.changeSearchFilter}
    >
      {props.criteria.map((filterOption, index) => (
        <option key={index} value={filterOption}>
          {filterOption}
        </option>
      ))}
    </select>
  </>
);

export default FilterDisplay;
