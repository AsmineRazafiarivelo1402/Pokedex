import { useState } from "react";

interface Props {
  setSearchName: (value: string) => void;
  setSearchColor: (value: string) => void;
  addPokemon: (pokemon: any) => void;
}

export default function Navbaar({ setSearchName, addPokemon }: Props) {

  const [showForm, setShowForm] = useState(false);

  const [pokemon, setPokemon] = useState({
    name: "",
    color: "",
    image: "",
    sound: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    });
  };

  // Fonction pour sauvegarder dans localStorage
  const savePokemonToLocalStorage = (pokemon: any) => {
    const storedPokemons = JSON.parse(localStorage.getItem("pokemons") || "[]");
    storedPokemons.push(pokemon);
    localStorage.setItem("pokemons", JSON.stringify(storedPokemons));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPokemon = { ...pokemon };

    // 1️⃣ Sauvegarde dans localStorage
    savePokemonToLocalStorage(newPokemon);

    // 2️⃣ Ajout dans l'état de App pour mise à jour immédiate
    addPokemon(newPokemon);

    // 3️⃣ Réinitialiser le formulaire
    setPokemon({ name: "", color: "", image: "", sound: "" });
    setShowForm(false);
  };

  return (
    <>
      <nav className="bg-blue-400 w-[80vw] rounded-[10px] p-5 m-auto mt-10 ">
        <div className="flex justify-between px-5 items-center ">
          <h1 className="font-serif hover:text-white">
            POKEDEX
          </h1>

          <div className="flex gap-4">

            <input
              type="text"
              placeholder="Search name"
              onChange={(e) => setSearchName(e.target.value)}
              className="p-2 rounded-md"
            />

            <button
              onClick={() => setShowForm(true)}
              className="border-2 border-blue-500 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-500 transition"
            >
              Create Pokemon
            </button>

          </div>
        </div>
      </nav>

      {showForm && (
        <div className="flex justify-center mt-10">

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[400px] p-6 shadow-lg rounded-lg bg-white"
          >

            <input
              name="name"
              placeholder="Pokemon name"
              value={pokemon.name}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="color"
              placeholder="Color"
              value={pokemon.color}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="image"
              placeholder="Image URL"
              value={pokemon.image}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <input
              name="sound"
              placeholder="Sound URL"
              value={pokemon.sound}
              onChange={handleChange}
              className="border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Create
            </button>

          </form>

        </div>
      )}
    </>
  );
}