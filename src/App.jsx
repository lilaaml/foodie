import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './pages/Home'
import Discussions from './pages/Discussions'
import Recipes from './pages/Recipes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NoPage from './pages/NoPage'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="discussions" element={<Discussions />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
