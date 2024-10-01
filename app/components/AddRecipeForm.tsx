"use client";
import { useState } from "react";

const AddRecipeForm = () => {
  const [naam, setNaam] = useState("");
  const [categorie, setCategorie] = useState("Ontbijt");
  const [ingredienten, setIngredienten] = useState("");
  const [instructies, setInstructies] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Maak een nieuw recept object
    const newRecipe = {
      naam,
      categorie,
      ingredienten,
      instructies,
    };

    // Haal bestaande recepten op uit localStorage
    const savedRecipes = JSON.parse(localStorage.getItem("recepten") || "[]");

    // Voeg het nieuwe recept toe aan de lijst van opgeslagen recepten
    const updatedRecipes = [...savedRecipes, newRecipe];

    // Sla de bijgewerkte recepten op in localStorage
    localStorage.setItem("recepten", JSON.stringify(updatedRecipes));

    // Reset het formulier
    setNaam("");
    setCategorie("Ontbijt");
    setIngredienten("");
    setInstructies("");
    
    alert("Recept toegevoegd!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gerechtnaam
        </label>
        <input
          type="text"
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ingrediënten
        </label>
        <textarea
          value={ingredienten}
          onChange={(e) => setIngredienten(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          placeholder="Bijv. '3 eieren, 200g bloem'"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Instructies
        </label>
        <textarea
          value={instructies}
          onChange={(e) => setInstructies(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          placeholder="Bijv. 'Mix de ingrediënten, bak op laag vuur.'"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Categorie
        </label>
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Ontbijt">Ontbijt</option>
          <option value="Lunch">Lunch</option>
          <option value="Diner">Diner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Opslaan
      </button>
    </form>
  );
};

export default AddRecipeForm;
