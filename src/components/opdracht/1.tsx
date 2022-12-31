import React from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokedexProps {
  limit: number;
  results: Pokemon[];
}

const Pokedex = ({ limit, results }: PokedexProps) => {
  const [pokemon, setPokemon] = React.useState<PokedexProps>({
    limit: limit,
    results: [],
  });
  const [search, setSearch] = React.useState<string>("");
  const [limitOfPokemon, setPokemonLimit] = React.useState<number>(limit);

  React.useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limitOfPokemon}&offset=0`;
    const fetchFunction = async () => {
      const result = await fetch(url);
      const json: PokedexProps = await result.json();

      setPokemon(json);
    };
    fetchFunction();
  }, [limitOfPokemon]);

  return (
    <>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      {pokemon &&
        pokemon.results
          .filter((pokemon) => pokemon.name.startsWith(search))
          .map((pokemon) => <p>{pokemon.name}</p>)}
      <div>
        <input
          type="number"
          name="limit"
          id="limit"
          value={limitOfPokemon}
          onChange={(event) =>
            setPokemonLimit(parseInt(event.target.value, 10))
          }
        />
        <button
          onClick={() => setPokemon({ limit: limitOfPokemon, results: [] })}
        >
          Set Limit
        </button>
      </div>
    </>
  );
};

const Een = () => {
  return (
    <>
      <Pokedex limit={10} results={[]} />
    </>
  );
};

export default Een;
