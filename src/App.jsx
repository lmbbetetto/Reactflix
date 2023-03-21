import "./global.css"


import { User } from "./components/user/User"
import { Catalogo } from "./components/catalogo/Catalogo"
import { Player } from "./components/player/Player";

import { Route, Routes, Link } from "react-router-dom";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </div>
  )
}
