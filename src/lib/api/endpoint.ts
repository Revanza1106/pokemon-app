export const POKE_ENDPOINTS = {
    getPokemons: (limit: number) => `/pokemon?limit=${limit}`,
    getPokemonDetails: (name: string) => `/pokemon/${name}`,
  };