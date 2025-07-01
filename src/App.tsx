import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword, Login, Products } from "./component";
import { SnackbarProvider } from "./component/context/SnackBarContext";

const App = () => {
  return (
    <Router>
      <SnackbarProvider>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </SnackbarProvider>
    </Router>
  );
};

export default App;