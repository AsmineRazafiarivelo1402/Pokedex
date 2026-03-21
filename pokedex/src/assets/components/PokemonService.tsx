import axios from "axios";

export interface PokemonData {
  name: string;

  image: string;

}

export const createPokemon = async (pokemonData: PokemonData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/pokemons",
      pokemonData
    );
    return response.data;
  } catch (error) {
    console.error("Erreur création pokemon :", error);
    throw error;
  }
};