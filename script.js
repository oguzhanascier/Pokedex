const container = document.querySelector('.poke-container')
const random = document.querySelector('.random')
const body = document.querySelector('body')
const pokeCount = 905


console.log("alperen was here ")

//todo RANDOM POKE BUTTON

random.addEventListener('click', async function randomPokemon() {
    const randomPoke = Math.floor(Math.random() * pokeCount + 1)
    random.classList.add('active')

    await getPokemon(randomPoke)

})


//todo API

async function getPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon-form/${id}`
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)

    createPokemonBox(data)

}


async function createPokemonBox(pokemon) {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const type = pokemon.types[0].type.name



    //todo CARD
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('poke-box')

    pokemonEl.innerHTML = `
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="">
            <div class="poke-text">
              
                <div class="poke-id">#${id}</div>
                <div class="poke-name">${name}</div>
                <div class="poke-type">${type}</div>
            </div>
        </div>
         <div class="button-container">
         
       
       
     </div>
 
    `

    container.append(pokemonEl)
    pokemonEl.previousSibling.remove()

}




