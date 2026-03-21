import { useState } from "react";
import {createPokemon} from "./PokemonService"

export default function CreatePokemon() {

  const [pokemon, setPokemon] = useState({
    name: "",
    color: "",
    image: "",
    
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createPokemon(pokemon);
      alert("Pokemon créé !");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center mt-20">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-96 p-6 shadow-lg rounded-lg"
      >

        <h2 className="text-2xl font-bold text-center">
          Create Pokemon
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Pokemon name"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="color"
          placeholder="Color"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
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
  );
}