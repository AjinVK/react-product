  import { HashRouter as Router, Routes, Route } from "react-router-dom";
  import { ForgotPassword, Login, Products, SignUp } from "./pages";
  import { SnackbarProvider } from "./context/SnackBarContext";

  const App = () => {
    return (
      <Router>
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/products" element={<Products />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    );
  };

  export default App;