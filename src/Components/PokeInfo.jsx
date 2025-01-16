import { useState } from "react";
import { useEffect } from "react";

const PokeInfo = () => {
  const [pokemon, setPokemon] = useState("");
  const [namePokemon, setNamePokemon] = useState("");
  useEffect(() => {
    if (namePokemon)
      fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
        .then((data) => data.json())
        .then((response) => setPokemon(response));
  }, [namePokemon]);
  return (
    <section>
      <input
        type="text"
        value={namePokemon}
        onChange={(e) => setNamePokemon(e.target.value.toLowerCase())}
      />
      {pokemon && (
        <div>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      )}
    </section>
  );
};
export default PokeInfo;
