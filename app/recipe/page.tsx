"use client";
import { useEffect, useState } from "react";
import AddRecipeForm from "../components/AddRecipeForm";
import FilterComponent from "../components/Filter";
import SearchComponent from "../components/Search";

interface Recept {
  naam: string;
  categorie: string;
  ingredienten: string;
  instructies: string;
}

const Recepten = () => {
  const [recepten, setRecepten] = useState<Recept[]>([]);
  const [showForm, setShowForm] = useState(false); // Formulier zichtbaar of niet
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Gekozen categorie
  const [filteredRecepten, setFilteredRecepten] = useState<Recept[]>([]); // Gefilterde recepten
  const [searchTerm, setSearchTerm] = useState<string>(""); // Zoekterm

  // Haal recepten uit localStorage bij het laden van de pagina
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recepten") || "[]");
    setRecepten(savedRecipes);
    setFilteredRecepten(savedRecipes); // Standaard zijn alle recepten zichtbaar
  }, []);

  // Gebruik useEffect om recepten te filteren op basis van de zoekterm en categorie
  useEffect(() => {
    filterRecipes(recepten, selectedCategory, searchTerm);
  }, [searchTerm, selectedCategory, recepten]); // Afhankelijkheden

  // Toggle de zichtbaarheid van het formulier
  const toggleFormVisibility = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  // Functie om een recept te verwijderen
  const deleteRecipe = (index: number) => {
    const updatedRecipes = recepten.filter((_, i) => i !== index);
    localStorage.setItem("recepten", JSON.stringify(updatedRecipes));
    setRecepten(updatedRecipes);
    filterRecipes(updatedRecipes, selectedCategory, searchTerm); // Pas de filter toe na verwijderen
  };

  // Filterfunctie om recepten bij te werken op basis van categorie en zoekterm
  const filterRecipes = (allRecepten: Recept[], category: string, searchTerm: string) => {
    let filtered = allRecepten;

    // Filter op basis van categorie
    if (category) {
      filtered = filtered.filter((recept) => recept.categorie === category);
    }

    // Filter op basis van zoekterm
    if (searchTerm) {
      filtered = filtered.filter((recept) =>
        recept.naam.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecepten(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Mijn Recepten</h1>

        {/* Zoekcomponent */}
        <SearchComponent
          searchTerm={searchTerm}
          handleSearchChange={setSearchTerm}
        />

        {/* Filtercomponent */}
        <FilterComponent
          selectedCategory={selectedCategory}
          handleCategoryChange={setSelectedCategory}
        />

        {/* Plus-knop om het formulier te tonen */}
        <div className="flex justify-center mb-8">
          <button
            onClick={toggleFormVisibility}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            {showForm ? "-" : "+"} Recept Toevoegen
          </button>
        </div>

        {/* Formulier alleen tonen als showForm true is */}
        {showForm && (
          <div className="mb-8">
            <AddRecipeForm />
          </div>
        )}

        {/* Gefilterde recepten tonen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecepten.length > 0 ? (
            filteredRecepten.map((recept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 relative">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{recept.naam}</h2>
                <p className="text-sm text-gray-600 mb-1">
                  Categorie: <span className="font-semibold">{recept.categorie}</span>
                </p>
                <h3 className="font-semibold mt-4 mb-2">Ingrediënten:</h3>
                <p className="text-gray-700 mb-4">{recept.ingredienten}</p>
                <h3 className="font-semibold mb-2">Instructies:</h3>
                <p className="text-gray-700">{recept.instructies}</p>

                {/* Verwijderknop (vuilbakje) */}
                <button
                  onClick={() => deleteRecipe(index)}
                  className="absolute top-2 right-2 border-black hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full focus:outline-none"
                  aria-label="Verwijder recept"
                >
                  🗑️
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Geen recepten gevonden.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recepten;
