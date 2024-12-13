
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
function App() {
  return (
    <>
    <Router>
     <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/product' element={<Products />} />
    </Routes>

    </Router>
    
    </>
  );
}

export default App;
