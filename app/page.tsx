import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      <h1>Pokemons List</h1>
      <PokemonList />
    </div>
  );
}
