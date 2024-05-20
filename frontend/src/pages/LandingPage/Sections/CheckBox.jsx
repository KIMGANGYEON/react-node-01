import PropTypes from "prop-types";

const CheckBox = ({ continents, checkedContinents, onFilters }) => {
  CheckBox.propTypes = {
    continents: PropTypes.array,
    checkedContinents: PropTypes.array,
    onFilters: PropTypes.func,
  };

  const handleToggle = (continentId) => {
    const currentIndex = checkedContinents.indexOf(continentId);

    const newChecked = [...checkedContinents];
    if (currentIndex === -1) {
      newChecked.push(continentId);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    onFilters(newChecked);
  };
  console.log(onFilters);
  return (
    <div className="p-2 mb-3 bg-gray-100 rounded-md">
      {continents?.map((continent) => (
        <div key={continent._id}>
          <input
            type="checkbox"
            onChange={() => handleToggle(continent._id)}
            checked={
              checkedContinents.indexOf(continent._id) === -1 ? false : true
            }
          />{" "}
          <label>{continent.name}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
