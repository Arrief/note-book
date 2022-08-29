const FilterDisplay = (props) => (
  <>
    <label for="filter-display">Filter for:</label>
    <select name="filter-display" id="filter-display">
      {props.criteria.map((filterOption) => (
        <option value={filterOption}>{filterOption}</option>
      ))}
    </select>
  </>
);

export default FilterDisplay;
