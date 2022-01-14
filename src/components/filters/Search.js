import React from "react";
import classes from "./Search.module.css";
import { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const searchInputChangeHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFilter(searchValue);
    setSearchValue("");
  };

  return (
    <div className={classes.search}>
      <form onSubmit={submitHandler}>
        <input
          className={classes["search-input"]}
          onChange={searchInputChangeHandler}
          type="text"
          value={searchValue}
          placeholder="Search by name.."
        />
        <button type="submit" className={classes["search-button"]}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
