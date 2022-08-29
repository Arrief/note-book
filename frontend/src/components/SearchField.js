const SearchField = (props) => (
  <>
    <label>Search</label>
    <input
      type="text"
      placeholder="Look for..."
      onChange={props.action}
      value={props.searchValue}
    />
  </>
);

export default SearchField;
