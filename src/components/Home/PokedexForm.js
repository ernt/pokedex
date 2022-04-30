import React, { useState } from 'react'



function PokemonForm({ setPokemonId, setLoading, setError }){
  const [ pokemon, setPokemon ] = useState('')

  const Change = e => {
    setPokemon(e.target.value)
  }

  const Submit = e => {
    e.preventDefault()
    if(pokemon !== ''){
      setError(false)
      setLoading(true)
      setPokemonId(window.isNaN(parseInt(pokemon)) ? pokemon.toLowerCase() : pokemon)
      setPokemon('')
      return
    }
    setError(true)
  }

  

  return (
    <form className="pokemon-form" onSubmit={Submit}>
      <input
        className="pokemon-input"
        type="text"
        name="pokemon"
        value={pokemon}
        placeholder="Busca tu pokemon"
        onChange={Change}
        autoComplete="off"/>
      <input type="button" onClick={Submit} className="pokemon-btn" value="Buscar"/>
    </form>
  )
}

export default PokemonForm