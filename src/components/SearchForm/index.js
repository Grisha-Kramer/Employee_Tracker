import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="Employee">Employee Name:</label>
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Employee Name"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}


export default SearchForm;
