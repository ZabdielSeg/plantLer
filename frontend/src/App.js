import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';


function App() {
  const [products, setProducts] = useState([]);

  const [user, setUser] = useState(null);

  const [cart, setCart] = useState(0);



  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
