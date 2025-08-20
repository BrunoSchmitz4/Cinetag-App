import Favoritos from "pages/Favoritos"
import Inicio from "./pages/Inicio"
import Teste from "./pages/Teste"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cabecalho from "components/Cabecalho"
import Rodape from "components/Rodape"
import Container from "components/Container"
import FavoritosProvider from "contexts/Favoritos"
import Player from "pages/Player"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/teste" element={<Teste />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes