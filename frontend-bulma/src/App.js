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
import 'react-multi-carousel/lib/styles.css';
import AuthService from './components/Auth/auth-service';
import PlantService from './components/Plants/plant-service';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = () => {
    servicePlants.getAllPlants()
      .then(response => setProducts(response))
      .catch(err => setProducts(false))
  };

  const [cart, setCart] = useState([]);

  const serviceAuth = new AuthService();
  const servicePlants = new PlantService();

  const fetchUser = () => {
    if (user === null) {
      serviceAuth.loggedin()
        .then(response => setUser(response))
        .catch(err => setUser(false));
    }
  };

  const getTheUser = userObj => {
    setUser(userObj);
  };

  const updateCart = obj => {
    setCart(obj);
  }

  return (
    <div className="App">
      <NavBar theUser={user} theCart={cart} getUser={getTheUser} />
      <Routes>
        <Route path='/' element={<HomePage allProducts={products} />} />
        <Route path='/signup' element={<Signup getUser={getTheUser} />} />
        <Route path='/login' element={<Login getUser={getTheUser} />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/products' element={<AllPlantsPage allProducts={products} />} />
        <Route path='/plant/:id' element={<PlantDetails />} />
        <Route path='/create-plant' element={<CreatePlant />} />
        <Route path='/profile/:userId' element={<SellerProfile theUser={user} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
