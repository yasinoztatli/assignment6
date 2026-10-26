import React from 'react';

const FilterForm = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="filterInput" style={{ marginRight: "10px" }}>Filter Posts by Title:</label>
      <input
        id="filterInput"
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ padding: "5px", width: "250px" }}
      />
    </div>
  );
};

export default FilterForm;