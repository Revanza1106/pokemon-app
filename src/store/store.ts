import { configureStore } from "@reduxjs/toolkit";
// import pokemonReducer from ""


export const store = configureStore({
    reducer: {
        // pokemon:
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispact = typeof store.dispatch;