import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Search } from './screens/Search'
import { Details } from './screens/Details'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/" element={<Search />}/ >
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      {/* Os componentes react precisam ser acoplados em fragmentos react ou elementos pai, como uma div */}
    </BrowserRouter>
  )
}

