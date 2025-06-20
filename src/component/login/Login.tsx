import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/vite.svg';
import CommonTextField from '../utils/CommonTextField';
import CommonButton from '../utils/CommonButton';
import { validateEmail, validatePassword } from '../utils/validation';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors: { emailError?: string; passwordError?: string } = {};

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError) {
      newErrors.emailError = emailError;
      isValid = false;
    }

    if (passwordError) {
      newErrors.passwordError = passwordError;
      isValid = false;
    }

    setFormData((prev) => ({ ...prev, ...newErrors }));
    return isValid;
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Login Successful!");
      setFormData({
        email: "",
        password: "",
        emailError: "",
        passwordError: "",
      });
      navigate("/products");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value, [name + "Error"]: "" }));
  };
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    document.title = "Huewine - Login";
  }, []);

  return (
    <Box className="rootBox">
      <Card className="card">
        <Grid container direction={{ xs: "column", sm: "row" }} spacing={0} >
          <Grid size={{ xs: 12, sm: 6 }} p={1} >
            <CardContent>
              <Typography variant='h5' className="title" >
                Login Page
              </Typography>
              <form onSubmit={handleSubmit} noValidate>
                <CommonTextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!formData.emailError}
                  helperText={formData.emailError}
                  required
                  className="login-field"
                />

                <CommonTextField
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!formData.passwordError}
                  helperText={formData.passwordError}
                  required
                  className="login-field"
                  showPasswordToggle
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />

                <Typography
                  variant="body2"
                  className="forgotPassword"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </Typography>

                <CardActions sx={{ flexDirection: 'column', gap: 2 }}>
                  <CommonButton
                    type="submit"
                    variant="contained"
                    className="loginBtn"
                    fullWidth
                  >
                    Login
                  </CommonButton>

                  <CommonButton
                    type="button"
                    variant="outlined"
                    className="signupBtn"
                    fullWidth
                  >
                    SignUp
                  </CommonButton>
                </CardActions>
              </form>
            </CardContent>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }} display="flex" justifyContent="center" alignItems="center"
            p={2} >
            <CardMedia
              component='img'
              image={img}
              alt='Illustration'
              className="image" />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Login;