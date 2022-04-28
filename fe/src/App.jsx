import Header from "./components/header";
import HomePage from "./pages/homePage";
import CheckOut from "./pages/checkOutPage";
import SignIn from "./pages/signIn";
import Register from "./pages/register"
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="checkOut" element={<CheckOut />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="signIn" element={<SignIn />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
