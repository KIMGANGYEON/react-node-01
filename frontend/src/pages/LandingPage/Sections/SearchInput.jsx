import PropTypes from "prop-types";

const SearchInput = ({ searchTerm, onSearch }) => {
  SearchInput.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearch: PropTypes.func,
  };

  console.log(searchTerm, onSearch);
  return (
    <input
      type="text"
      className="p-2 border border-gray-300 rounded-md"
      placeholder="검색해라"
      onChange={onSearch}
      value={searchTerm}
    />
  );
};

export default SearchInput;
