import { ConfigureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favorites";

export const store = ConfigureStore({
    reducer: {
        favoriteMeals: favoritesReducer;
    },
})