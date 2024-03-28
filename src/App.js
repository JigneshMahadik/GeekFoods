import './App.css';
import Home_Background from './components/home-background';
import { Route,Routes } from "react-router-dom";
import Quote from './components/quote';
import Restaurants from './components/restaurants';
import Foods from './components/foods';
import Contact from './components/contact';
import { Subcategory } from './components/subcategory';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/"  element={<Home_Background/>} />
          <Route path="/quote"  element={<Quote/>} />
          <Route path="/restaurants"  element={<Restaurants/>} />
          <Route path="/foods"  element={<Foods/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/category/:subcategory" element={<Subcategory/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
