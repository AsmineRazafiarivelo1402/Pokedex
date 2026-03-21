import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbaar from "./assets/components/Navbar";
import PokemonCard from "./assets/components/PokemonCard";

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [searchName, setSearchName] = useState("");
  const [searchColor, setSearchColor] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => {

        const apiPokemons = res.data.results;

        // récupérer les pokemons du localStorage
        const localPokemons = JSON.parse(
          localStorage.getItem("pokemons") || "[]"
        );

        // fusionner API + localStorage
        setPokemons([...apiPokemons, ...localPokemons]);
      });

  }, []);

  // fonction pour ajouter un pokemon
  const addPokemon = (pokemon: any) => {
    setPokemons((prev) => [...prev, pokemon]);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchName.toLowerCase()) &&
      pokemon.name.toLowerCase().includes(searchColor.toLowerCase())
    );
  });

  return (
    <>
      <Navbaar
        setSearchName={setSearchName}
        setSearchColor={setSearchColor}
        addPokemon={addPokemon}
      />

      <div className="grid grid-cols-4 gap-5 p-10">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={
              pokemon.image ||
              `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
            }
            cries={
              pokemon.sound ||
              `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${index + 1}.ogg`
            }
          />
        ))}
      </div>
    </>
  );
}

export default App;