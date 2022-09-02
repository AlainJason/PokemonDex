import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import PokemonProfile from "./components/PokemonProfile";
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom";
function App() {
  
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:pokemonID" element={<PokemonProfile />} />
      </Routes>
    </Router>

  );
}

export default App;
