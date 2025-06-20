import React, { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CommonTextField from '../utils/CommonTextField';
import CommonButton from '../utils/CommonButton';
import './style.css';
import { validateEmail } from '../utils/validation';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const error = validateEmail(email);
        if (error) {
            setEmailError(error);
            return;
        }

        setEmailError('');
        alert('Reset link sent to your email');
        navigate('/login');
        setEmail('');
    };

    return (
        <Box className="rootBox" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card className="card" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardContent>
                    <Typography variant="h5" className="title" m={1}>
                        Forgot Password
                    </Typography>
                    <Typography textAlign="center" className="forgotPassword-text" mb={2}>
                        Enter your email to receive a password reset link.
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <CommonTextField
                            label="Email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!emailError}
                            helperText={emailError}
                            className="login-field"
                            required
                        />
                        <CommonButton
                            type="submit"
                            variant="contained"
                            className="resetBtn"
                        >
                            Send Reset Link
                        </CommonButton>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ForgotPassword;
