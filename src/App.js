import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SupplierDetail from './pages/SupplierDetails';
import Suppliers from './pages/Suppliers';
import AddSupplier from './pages/AddSupplier';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/add" element ={<AddSupplier/>} />
        <Route path ="/suppliers" element ={<Suppliers/>} />
        <Route path ="/supplier/:id" element ={<SupplierDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
