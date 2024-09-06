import './App.css'
import SingleRepo from './components/repository/singleRepo/SingleRepo'
import { Home } from './pages/Home/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-repos/:repoName' element={<SingleRepo />} />
      </Routes>

    </Router>
    </>
  )
}

export default App
