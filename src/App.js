import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Success from './pages/Success';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Account from './pages/Account';


function App() {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/success" element={<Success />} />
            <Route path="/account" element={<Account />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Shop />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
