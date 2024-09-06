import './App.css'
import { Home } from './pages/Home/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Repo } from './pages/Repo/Repo'
import { FollowersPage } from './pages/FollowersPage/FollowersPage'


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-repos/:repoName' element={<Repo />} />
        <Route path='/followers/:userName' element={<FollowersPage />} />
      </Routes>

    </Router>
    </>
  )
}

export default App
