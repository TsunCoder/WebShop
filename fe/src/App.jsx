import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import HomePage from './pages/homePage'
import Header from './components/header'
import Footer from './components/footer'

import SignIn from './pages/signInPage'
import SignUp from './pages/signUpPage'
import ShopPage from './pages/shopPage'
import DetailProductPage from './pages/detailProductPage'
function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='shopPage' element={<ShopPage/>}/>
        <Route path='detailProductPage' element={<DetailProductPage/>}/>
        <Route path='signInPage' element={<SignIn/>}/>
        <Route path='signUpPage' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
