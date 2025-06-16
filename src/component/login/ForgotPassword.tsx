import React, { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError('Email is required');
            return false;
        }
        const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Enter a valid email');
            return false;
        }
        setEmailError('');
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateEmail()) {
            alert('Reset link sent to your email');
            navigate("/login");
            setEmail('');
        }
    };

    return (
        <Box className="rootBox" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card className="card" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CardContent>
                    <Typography variant="h5" className="title">
                        Forgot Password
                    </Typography>
                    <Typography variant="body2" mb={2} textAlign='center'>
                        Enter your email address and we'll send you a link to reset your password.
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <TextField
                            fullWidth
                            label="Email"
                            variant='standard'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            error={!!emailError}
                            helperText={emailError}
                            margin="normal"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            className='resetBtn'
                            sx={{ mt: 2 }}
                        >
                            Send Reset Link
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ForgotPassword;
