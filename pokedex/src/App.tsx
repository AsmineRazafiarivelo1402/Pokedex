
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
        setPokemons(res.data.results);
      });
  }, []);

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
      />

      <div className="grid grid-cols-4 gap-5 p-10">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
            cries={`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${index + 1}.ogg`}
            color="yellow"
          />
        ))}
      </div>
    </>
  );
}

export default App;