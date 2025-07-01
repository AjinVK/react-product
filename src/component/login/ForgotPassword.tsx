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
import { useSnackbar } from '../context/SnackBarContext';

interface User {
    email: string;
}

const ForgotPassword: React.FC = () => {

    const initialFormState: User = {
        email: "",
    };

    const initialErrorState = {
        email: "",
    };

    const [formData, setFormData] = useState<User>(initialFormState);
    const [errors, setErrors] = useState(initialErrorState);

    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const validateForm = () => {

        const newErrors = {
            email: validateEmail(formData.email),
        };

        setErrors(newErrors);

        if (newErrors.email) {
            showSnackbar(newErrors.email, 'error');
            return false;
        }

        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        showSnackbar('Reset link sent to your email', 'success');
        navigate('/login');

        setFormData(initialFormState);
        setErrors(initialErrorState);
    };

    return (
        <Box className="rootBox" display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card className="forgotPassword-card" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
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
