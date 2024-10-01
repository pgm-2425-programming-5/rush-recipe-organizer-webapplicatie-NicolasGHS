import React from "react";

interface FilterProps {
  selectedCategory: string;
  handleCategoryChange: (category: string) => void;
}

const FilterComponent: React.FC<FilterProps> = ({
  selectedCategory,
  handleCategoryChange,
}) => {
  return (
    <div className="mb-8">
      <label htmlFor="category" className="block text-lg font-medium mb-2">
        Filter op Categorie:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={(e) => handleCategoryChange(e.target.value)}
        className="border border-gray-300 rounded-lg py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Alle Categorieën</option>
        <option value="Ontbijt">Ontbijt</option>
        <option value="Lunch">Lunch</option>
        <option value="Diner">Diner</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
};

export default FilterComponent;
