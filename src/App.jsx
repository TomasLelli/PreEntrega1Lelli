import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//CSS
import "../css/bootstrap.min.css";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./context/CartProvider";
import Carro from "./components/Carro/Carro";

function App() {
 return (
  <div>
   <CartProvider>
    <NavBar />
    <Routes>
     <Route path="/" element={<ItemListContainer />} />
     <Route path="/category/:id" element={<ItemListContainer />} />
     <Route path="/detalle" element={<ItemDetailContainer />} />
     <Route path="/carro" element={<Carro />} />
    </Routes>
   </CartProvider>
  </div>
 );
}

export default App;
