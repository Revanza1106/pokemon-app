export interface Pokemon {
  id: number;
  name: string;
  url: string;

  types: Type[];
  sprite: {
      other: {
          'official-artwork': {
              front_default: string;
          };
      };
  };
};

interface Type {
  name: string;
}
export interface getAllPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  result: Pokemon [];
}