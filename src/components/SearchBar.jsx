import React from 'react'
import { TextInput } from "flowbite-react";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="max-w-md w-50">
      <div className="mb-2 block">
      </div>
      <TextInput
        id="search"
        type="search"
        rightIcon={FiSearch}
        placeholder="Search..."
        required
      />
    </div>
  );
}

export default SearchBar