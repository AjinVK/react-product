import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import img from '../../assets/images/Huewine_Wi.svg';
import CommonTextField from '../../component/common/CommonTextField';
import CommonButton from '../../component/common/CommonButton';
import { validateEmail, validateLoginPassword  } from '../../utils/validation';
import { useSnackbar } from '../../context/SnackBarContext';

import '../fromStyle.css';

interface User {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  const [formData, setFormData] = useState<User>({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = 'Huewine - Login';
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handlePrevent = (e: React.ClipboardEvent) => {
    e.preventDefault();
    showSnackbar(`${e.type} action is disabled for security.`, 'warning');
  };

  const validateForm = () => {
    const newErrors = {
      email: validateEmail(formData.email),
      password: validateLoginPassword (formData.password),
    };

    setErrors(newErrors);

    const firstError = Object.values(newErrors).find((e) => e);
    if (firstError) {
      showSnackbar(firstError, 'error');
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    showSnackbar('Login Successful!', 'success');
    navigate('/products');

    setFormData({ email: '', password: '' });
    setErrors({ email: '', password: '' });
  };

  return (
    <Box
      className="rootBox"
      sx={{
        px: { xs: 1, sm: 4 },
        py: { xs: 3, sm: 4 },
      }}
    >
      <Card
        className="card"
        sx={{
          px: 1,
          py: { xs: 2, sm: 3 },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          overflow: 'hidden',
        }}
      >
        <Grid container wrap="nowrap">
          <Grid size={{ sm: 6 }}>
            <CardContent
              sx={{
                p: { xs: 2, sm: 5 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Typography variant="h5"
                className="title"
                sx={{
                  mb: { xs: 2, sm: 2 },
                  fontSize: { xs: '2rem', sm: '2rem' },
                }}
              >
                Login
              </Typography>

              <form onSubmit={handleSubmit} noValidate>
                <CommonTextField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  required
                  className="login-field"
                />

                <CommonTextField
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  showPasswordToggle
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  onPaste={handlePrevent}
                  required
                  className="login-field"
                />

                <Typography
                  variant="body2"
                  color="primary"
                  className="forgotPassword"
                  onClick={() => navigate('/forgot-password')}
                  sx={{
                    mt: { xs: 1, sm: 1.5 },
                    fontSize: { xs: '0.81rem', sm: '0.85rem' },
                  }}
                >
                  Forgot Password?
                </Typography>

                <CardActions
                  sx={{
                    flexDirection: 'column',
                    gap: 3,
                    mt: 3,
                    px: 0,
                  }}
                >
                  <CommonButton
                    type="submit"
                    variant="contained"
                    fullWidth
                    className="loginBtn"
                    sx={{
                      mt: { xs: 1, sm: 2 },
                      padding: {
                        xs: '0.6rem 1rem',
                        sm: '0.8rem 1.5rem',
                      },
                      fontSize: {
                        xs: '0.88rem',
                        sm: '0.94rem',
                      },
                    }}
                  >
                    Login
                  </CommonButton>

                  <CommonButton
                    type="button"
                    variant="outlined"
                    fullWidth
                    className="signupBtn"
                    sx={{
                      padding: {
                        xs: '0.6rem 1rem',
                        sm: '0.8rem 1.5rem',
                      },
                      fontSize: {
                        xs: '0.88rem',
                        sm: '0.94rem',
                      },
                    }}
                    onClick={handleSignUpClick}
                  >
                    Sign Up
                  </CommonButton>
                </CardActions>
              </form>
            </CardContent>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}
            sx={{
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2,
            }}
          >
            <CardMedia
              component="img"
              image={img}
              alt="Login Illustration"
              className="image"
              sx={{
                width: { xs: '80%', sm: '100%' },
                maxHeight: 300,
                objectFit: 'contain',
              }}
            />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default Login;
