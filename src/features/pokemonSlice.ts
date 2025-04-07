import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from '../lib/api/axios'
import { Pokemon, getAllPokemon } from "../types/global";

interface PokemonState {
    data: Pokemon[];
    loading: boolean;
    error: string | null;
    count: number;
}

const initialState: PokemonState = {
    data: [],
    loading: false,
    error: null,
    count: 0
}

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (offset: number = 0) => {
        const res = await api.get<getAllPokemon>
            (
                `/pokemon?limit=20&offset=${offset}`
            );
        return res.data
    }
);


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemon.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [...state.data, ...action.payload.result];
                state.count = action.payload.count;
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch Pokémon';

            });
    },
});

export default pokemonSlice.reducer;