import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CommonTextField from '../../component/common/CommonTextField';
import CommonButton from '../../component/common/CommonButton';
import { validateLoginPassword, validateUserName } from '../../utils/validation';
import { useSnackbar } from '../../context/SnackBarContext';

import '../fromStyle.css';
import './checkBox.css';
import { motion } from 'framer-motion';

interface User {
  userName: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    document.title = "Huewine - Login";
  }, []);

  const [formData, setFormData] = useState<User>({ userName: '', password: '' });
  const [errors, setErrors] = useState<{ userName: string; password: string }>({
    userName: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  //   if (token) {
  //     // navigate("/dashboard");
  //   }
  //   document.title = 'Huewine - Login';
  // }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleSignUpClick = () => {
  //   showSnackbar("Sign Up is currently unavailable. Please try again later.", "info");
  //   navigate('/signup');
  // };

  const handlePrevent = (e: React.ClipboardEvent) => {
    e.preventDefault();
    showSnackbar(`${e.type} action is disabled for security.`, 'warning');
  };

  const validateForm = () => {
    const newErrors = {
      userName: validateUserName(formData.userName),
      password: validateLoginPassword(formData.password),
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
    const fakeToken = "abc123";

    if (!validateForm()) return;

    if (rememberMe) {
      localStorage.setItem("token", fakeToken);
    } else {
      sessionStorage.setItem("token", fakeToken);
    }

    showSnackbar('Login Successful!', 'success');
    navigate('/products');

    setFormData({ userName: '', password: '' });
    setErrors({ userName: '', password: '' });
  };

  const xOffset = 0;

  return (
    <Box
      className="rootBox"
      sx={{
        px: { xs: 2, sm: 4 },
        py: { xs: 3, sm: 4 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1, x: xOffset }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          ease: 'easeOut',
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
            margin: '1rem auto',
          }}
        >
          <Grid container wrap="nowrap">
            <Grid
              p={{ xs: 1, sm: 1 }}
            >
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
                    label="User Name"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    error={!!errors.userName}
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

                  <FormControlLabel
                    sx={{
                      mt: 1,
                      ml: 1,
                    }}
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        disableRipple
                        icon={<span className="checkbox-box" />}
                        checkedIcon={<span className="checkbox-box checkbox-checked" />}
                        inputProps={{ 'aria-label': 'custom checkbox' }}
                        sx={{
                          padding: 0,
                          mr: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(50, 8, 129, 0.08)',
                            borderRadius: '4px',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: '0.85rem',
                          color: '#5119B7',
                          fontWeight: 500,
                          userSelect: 'none',
                        }}
                      >
                        Remember Me
                      </Typography>
                    }
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, }}>
                    <Typography
                      variant="body2"
                      color="primary"
                      className="forgotPassword"
                      onClick={() => navigate('/forgot-password')}
                      sx={{
                        mt: { xs: 1, sm: 0 },
                        fontSize: { xs: '0.81rem', sm: '0.85rem' },
                        cursor: 'pointer',
                        width: 'fit-content',
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </Box>

                  <CardActions
                    sx={{
                      flexDirection: 'column',
                      gap: 3,
                      mt: 1.5,
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

                    {/* <CommonButton
                    type="button"
                    variant="outlined"
                    fullWidth
                    className="signupBtn"
                    disabled
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
                  </CommonButton> */}
                  </CardActions>
                </form>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Login;
