import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product from './Components/Products/Product';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;