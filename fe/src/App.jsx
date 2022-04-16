import Header from "./components/header";
import HomePage from "./pages/homePage";
import CheckOut from "./pages/checkOutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="checkOut" element={<CheckOut />}></Route>
          <Route path="home" element={<HomePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
