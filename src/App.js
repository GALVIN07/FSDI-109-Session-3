import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Cart from "./components/cart";
import Admin from "./components/admin";
import Home from "./components/home";



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import About from "./components/about";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalState from './context/globalState';


function App() {
  return (
    <div className="App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>
          <div className="page-content">

          <Routes>
            <Route path="/home" exact element={<Home/>}></Route>
            <Route path="/catalog" exact element={<Catalog/>}></Route>
            <Route path="/admin" exact element={<Admin/>}></Route>
            <Route path="/about" exact element={<About/>}></Route>
            <Route path="/cart" exact element={<Cart/>}></Route>
          </Routes>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
