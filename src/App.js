import './App.css';
import Navbar from './components/navbar';
import Footer from '../src/components/footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){
  return <div className="App">
    <Router>
      <Navbar />
      <Home/>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/menu' element={<Menu/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
   </Router>
  </div>
}
export default App;
