// import React, { useState } from 'react';
// import {
//     Box,
//     Card,
//     CardContent,
//     Typography,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import CommonTextField from '../utils/CommonTextField';
// import CommonButton from '../utils/CommonButton';
// import { validateEmail } from '../utils/validation';
// import { useSnackbar } from '../context/SnackBarContext';
// import './style.css';

// interface User {
//     email: string;
// }

// const ForgotPassword: React.FC = () => {
//     const navigate = useNavigate();
//     const { showSnackbar } = useSnackbar();

//     const [formData, setFormData] = useState<User>({ email: '' });
//     const [errors, setErrors] = useState<{ email: string }>({ email: '' });

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;

//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const validateForm = () => {
//         const emailError = validateEmail(formData.email);
//         setErrors({ email: emailError });

//         if (emailError) {
//             showSnackbar(emailError, 'error');
//             return false;
//         }

//         return true;
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();

//         if (!validateForm()) return;

//         showSnackbar('Reset link sent to your email', 'success');
//         navigate('/login');

//         setFormData({ email: '' });
//         setErrors({ email: '' });
//     };

//     return (
//         <Box
//             className="rootBox"
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             minHeight="100vh"
//         >
//             <Card
//                 className="forgotPassword-card"
//                 sx={{
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 <CardContent sx={{ width: '100%', maxWidth: 400 }}>
//                     <Typography variant="h5" className="title" mb={1}>
//                         Forgot Password
//                     </Typography>

//                     <Typography
//                         textAlign="center"
//                         className="forgotPassword-text"
//                         mb={3}
//                     >
//                         Enter your email to receive a password reset link.
//                     </Typography>

//                     <form onSubmit={handleSubmit} noValidate>
//                         <CommonTextField
//                             label="Email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             error={!!errors.email}
//                             // helperText={errors.email}
//                             required
//                             className="login-field"
//                         />

//                         <CommonButton
//                             type="submit"
//                             variant="contained"
//                             className="resetBtn"
//                             fullWidth
//                         >
//                             Send Reset Link
//                         </CommonButton>
//                     </form>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };

// export default ForgotPassword;


import React, { useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CommonTextField from '../../component/common/CommonTextField';
import CommonButton from '../../component/common/CommonButton';
import { validateEmail } from '../../utils/validation';
import { useSnackbar } from '../../context/SnackBarContext';
import '../fromStyle.css';
import { motion } from 'framer-motion';

interface User {
    email: string;
}

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        document.title = 'Huewine - Forgot Password';
    }, []);

    const [formData, setFormData] = useState<User>({ email: '' });
    const [errors, setErrors] = useState<{ email: string }>({ email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        const emailError = validateEmail(formData.email);
        setErrors({ email: emailError });

        if (emailError) {
            showSnackbar(emailError, 'error');
            return false;
        }
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        showSnackbar('Reset link sent to your email', 'success');
        navigate('/login');

        setFormData({ email: '' });
        setErrors({ email: '' });
    };

    const xOffset = 0;

    return (
        <Box
            className="rootBox"
            sx={{
                px: { xs: 2, sm: 4 },
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
                    className="forgotPassword-card"
                    sx={{
                        px: { xs: 2, sm: 4 },
                        py: { xs: 3, sm: 4 },
                        maxWidth: { xs: '100%', sm: 500 },
                    }}
                >
                    <CardContent>
                        <Typography
                            variant="h5"
                            className="title"
                            sx={{
                                mb: 2,
                                fontSize: { xs: '1.75rem', sm: '2rem' },
                            }}
                        >
                            Forgot Password
                        </Typography>

                        <Typography
                            sx={{
                                textAlign: 'center',
                                mb: 2,
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                color: '#444',
                            }}
                        >
                            Enter your email to receive a password reset link.
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

                            <CommonButton
                                type="submit"
                                variant="contained"
                                fullWidth
                                className="resetBtn"
                                sx={{
                                    mt: { xs: 2, sm: 3 },
                                    padding: { xs: '0.6rem 1rem', sm: '0.8rem 1.5rem' },
                                    fontSize: { xs: '0.88rem', sm: '0.94rem' },
                                }}
                            >
                                Send Reset Link
                            </CommonButton>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>

        </Box>
    );
};

export default ForgotPassword;
