import './App.css'
import { Home } from './pages/Home/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Repo } from './pages/Repo/Repo'
import { FollowersPage } from './pages/FollowersPage/FollowersPage'
import { FollowerProfilePage } from './pages/FollowerProfilePage/FollowerProfilePage'
import { AllUsers } from './pages/AllUsers/AllUsers'

console.log(import.meta.env.VITE_BASE_URL);


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/single-repos/:repoName' element={<Repo />} />
        <Route path='/followers/:userName' element={<FollowersPage />} />
        <Route path='/follower/:userName' element={<FollowerProfilePage />} />
        <Route path='/all-users' element={<AllUsers />} />
      </Routes>

    </Router>
    </>
  )
}

export default App
