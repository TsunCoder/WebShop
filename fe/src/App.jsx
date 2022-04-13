import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import HomePage from './pages/homePage'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import 'antd/dist/antd.dark.css'
import Header from './component/nav/Header'

function App() {

  return (

    <Router>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<Login />} />
        <Route patt='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
