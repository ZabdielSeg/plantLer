import { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Login from './components/Auth/Login';
import NavBar from './components/NavBar';
import PlantDetails from './components/Plants/PlantDetails';
import SellerProfile from './components/Auth/SellerProfile';
import Footer from './components/Footer';
import Signup from './components/Auth/Signup';
import CreatePlant from './components/Plants/CreatePlant';
import HomePage from './components/HomePage/HomePage';
import AllPlantsPage from './components/Plants/AllPlantsPage';
import CartPage from './components/Plants/CartPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  // useEffect(() => )

  const [products, setProducts] = useState(null);

  const [cart, setCart] = useState(0);


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<CartPage /> } />
        <Route path='/products' element={<AllPlantsPage />} /> 
      </Routes>
      {/* <CreatePlant/> */}
      {/* <PlantDetails /> */}
      {/* <SellerProfile /> */}
      {/* <Footer /> */}
      {/* <HomePage /> */}
      {/* <AllPlantsPage /> */}
      {/* <CartPage /> */}
      <Footer />
    </div>
  );
}

export default App;
