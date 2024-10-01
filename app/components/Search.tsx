import React from "react";

interface SearchProps {
  searchTerm: string;
  handleSearchChange: (term: string) => void;
}

const SearchComponent: React.FC<SearchProps> = ({
  searchTerm,
  handleSearchChange,
}) => {
  return (
    <div className="mb-8">
      <label htmlFor="search" className="block text-lg font-medium mb-2">
        Zoek naar een Recept:
      </label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Typ de naam van het recept..."
        className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchComponent;
