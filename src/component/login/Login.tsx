import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../assets/images/Huewine_Wi.svg';
import CommonTextField from '../utils/CommonTextField';
import CommonButton from '../utils/CommonButton';
import { validateEmail, validatePassword } from '../utils/validation';
import { useSnackbar } from '../context/SnackBarContext';

interface User {
  email: string;
  password: string;
}

const Login = () => {

  const initialFormState: User = {
    email: "",
    password: "",
  };

  const initialErrorState = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<User>(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [showPassword, setShowPassword] = useState(false);

  const { showSnackbar } = useSnackbar();

  const validateForm = () => {

    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
    };

    setErrors(newErrors);

    if (newErrors.email) {
      showSnackbar(newErrors.email, 'error');
      return false;
    }
    if (newErrors.password) {
      showSnackbar(newErrors.password, 'error');
      return false;
    }

    return Object.values(newErrors).every((error) => error === "");
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    showSnackbar("Login Successful!", "success");
    navigate("/products");

    setFormData(initialFormState);
    setErrors(initialErrorState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrevent = (e: React.ClipboardEvent<any>) => {
    e.preventDefault();
    showSnackbar(`${e.type} action is disabled for security.`, "warning");
  };

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
                  className="login-field"
                  value={formData.email}
                  error={!!errors.email}
                  onChange={handleChange}
                  required
                />
                <CommonTextField
                  label="Password"
                  name="password"
                  className="login-field"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  showPasswordToggle
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  onPaste={handlePrevent}
                  required
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