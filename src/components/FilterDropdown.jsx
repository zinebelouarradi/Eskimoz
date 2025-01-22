import PropTypes from "prop-types";
import React, { useState } from "react";

const FilterDropdown = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    onChange(value);
    setIsOpen(false);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="p-2 text-center"
      onBlur={handleBlur}
      data-testid="filter-dropdown"
    >
      <div className="max-w-sm mx-auto relative">
        <button
          className="block w-full py-2.5 px-4 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="filter-button"
        >
          {selectedValue || "Filter by job"}
        </button>

        {isOpen && (
          <ul className="absolute mt-2 w-full text-gray-500 bg-white border border-gray-200 shadow-md max-h-[70vh] overflow-y-auto">
            {options.map((option, index) => (
              <li
                key={index}
                className={`px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  option === selectedValue ? "bg-gray-200" : ""
                }`}
                onClick={() => handleSelect(option)}
                tabIndex={0}
                data-testid={`option-${index}`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

FilterDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterDropdown;
