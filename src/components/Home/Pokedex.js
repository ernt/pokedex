import React, { useState, useEffect } from 'react'
import PokedexSc from './PokedexSc'
import PokedexForm from './PokedexForm'

function Pokedex(){
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [ pokemon, setPokemon ] = useState(null)
  const RandomId = Math.floor(Math.random() * 806 + 1)
  const [ pokemonID, setPokemonId ] = useState(RandomId)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
      })
  }, [pokemonID])

  return (
    <div className="pokedex">
      <div className="pokedex-left">
        
        <div className="pokemon-card">
          <PokedexSc
            pokemon={pokemon}
            loading={loading}
            error={error}
          />
        </div>
        <div className="pokedex-left-bottom">
          
          <PokedexForm
            setPokemonId={setPokemonId}
            setLoading={setLoading}
            setError={setError}
          />
        </div>
      </div>
     
    </div>
  )
}

export default Pokedex