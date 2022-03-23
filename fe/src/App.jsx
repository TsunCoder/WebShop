import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import HomePage from './pages/homePage'

function App() {

  return (
    <Router>
    <h1>App</h1>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </Router>
  )
}

export default App
