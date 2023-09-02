import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
    return (
        <FavoritesContext.Provider>
            {children}
        </FavoritesContext.Provider>
    );  
};

export default FavoritesContextProvider;