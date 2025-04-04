// const {http} = require('../plugins')

import { httpClient } from '../plugins';

export const getPokemonById = async (id: string | number): Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        // fetch(url).then( (response) => {
        //     response.json().then((pokemon) => {
        //         // console.log(pokemon.name);
    
        //         callback(pokemon.name);
        //     });
        // });
        // return 'pokemon';
    
    
        // return fetch(url)
        // .then((resp) =>
        //     resp.json()
        // )
        // // .then(() => {throw new Error('Pokemon no existe')})
        // .then((pokemon) =>pokemon.name);
    
    
        // const respo = await fetch(url);
        // const pokemon = await respo.json();
    
        // // throw new Error('Pokemon no existe');
    
    
        const pokemon = await httpClient.get(url);
    
        return pokemon.name;
    
    } catch (error) {
        throw new Error(`Pokemon not found with id ${id}`)   
    }
}

// module.exports = getPokemonById;