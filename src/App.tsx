import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword, Login, Products } from "./component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;