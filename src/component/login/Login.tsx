import { Button, Card, CardActions, CardContent, CardMedia, Grid, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';


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

    if (!formData.email.trim()) {
      newErrors.emailError = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)
    ) {
      newErrors.emailError = "Enter a valid email";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.passwordError = "Password is required";
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

  return (
    <Box className="rootBox">
      <Card className="card">
        <Grid container direction={{ xs: "column", sm: "row" }} spacing={0} >
          <Grid size={{ xs: 12, sm: 6 }} p={1} >
            <CardContent>
              <Typography variant='h5' className="title" >
                Login Page
              </Typography>
              <form onSubmit={handleSubmit} noValidate >
                <TextField
                  label='Email'
                  name='email'
                  type='email'
                  variant='standard'
                  margin='normal'
                  onChange={handleChange}
                  value={formData.email}
                  error={!!formData.emailError}
                  helperText={formData.emailError}
                  required
                  fullWidth />
                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  variant="standard"
                  margin="normal"
                  onChange={handleChange}
                  value={formData.password}
                  error={!!formData.passwordError}
                  helperText={formData.passwordError}
                  required
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword((prev) => !prev)} edge="end">
                          {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Typography
                  variant='body2'
                  className="forgotPassword"
                  onClick={() => navigate("/forgot-password")}
                >
                  Forgot Password?
                </Typography>
                <CardActions sx={{ flexDirection: 'column', gap: 2 }} >
                  <Button
                    type='submit'
                    variant='contained'
                    className='loginBtn'
                    fullWidth>
                    Login
                  </Button>
                  <Button
                    type='button'
                    variant='outlined'
                    className="signupBtn"
                    fullWidth>
                    SignUp
                  </Button>
                </CardActions>
              </form>
            </CardContent>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6 }} display="flex" justifyContent="center" alignItems="center"
            p={2} >
            <CardMedia
              component='img'
              image='/vite.svg'
              alt='Illustration'
              className="image" />
          </Grid>
        </Grid>
      </Card>
    </Box>
  )
}

export default Login;