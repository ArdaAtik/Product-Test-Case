import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarComponent from "./components/NavbarComponent";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
