import './App.scss'
import Navbar from './components/navbar'
import PokemonDetail from './pages/DetailPage'
import Home from './pages/Home'
function App() {


  return (
    <div>
      <Navbar/>
      <Home/>
      <PokemonDetail/>
    </div>
  )
}

export default App
