import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import StudentProfile from './components/StudentProfile';
//import StateDemo from './components/StateDemo';
//import BindingDemo from './components/BindingDemo';
//import StyleDemo from './components/StyleDemo';
import StudentRegistration from './components/StudentRegistration';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<StudentRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*<StudentRegistration />

   /* <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/products">Products</Link>{" | "}
        <Link to="/cart">Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );

  /*
  <div>
    <p><StudentProfile name="Zira" /></p>
    <StateDemo />
    <BindingDemo />
    <StyleDemo />
  </div>
  */
