import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }} >

            { children }
        </FavoritosContext.Provider>
    )
}


// Isso aqui é um hook personalizado. Hooks devem ser chamados como "use" no começo
export function useFavoritoContext() {
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista.splice(novaLista.indexOf(novoFavorito), 1);
        return setFavorito(novaLista);
    }

    return {
        favorito,
        adicionarFavorito
    }
}

// Contexto é uma funcionalidade nativa do React que permite compartilharmos globalmente estados e valores.