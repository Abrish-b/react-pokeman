function PokemonList({pokemon}) {
  return (
    <div className="list">
        {pokemon.map(p => (<div key={p}><h3>{p}</h3></div>))}
    </div>
  )
}

export default PokemonList
