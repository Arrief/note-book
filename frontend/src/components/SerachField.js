const SearchField = (props) => (
  <input
    value={props.searchValue}
    type="text"
    placeholder="Type here..."
    onChange={props.action}
  />
);

export default SearchField;
