import { Box, Card, CardActions, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CommonTextField from "../../component/common/CommonTextField";
import CommonButton from "../../component/common/CommonButton";
import PasswordStrengthSnackbar from "../../component/PasswordStrengthHint/PasswordStrengthHint";
import { useSnackbar } from "../../context/SnackBarContext";

import {
    validateUserName,
    validateEmail,
    validateSignUpPassword ,
    validateConfirmPassword,
} from "../../utils/validation";

import { getPasswordStrength, type PasswordStrength } from "../../utils/passwordUtils";

import "../fromStyle.css";

interface User {
    userName: string;
    email: string;
    createPassword: string;
    confirmPassword: string;
}

const SignUp = () => {
    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();

    useEffect(() => {
        document.title = "Huewine - Sign Up";
    }, []);

    const initialFormState: User = {
        userName: "",
        email: "",
        createPassword: "",
        confirmPassword: "",
    };

    const initialErrorState = {
        userName: "",
        email: "",
        createPassword: "",
        confirmPassword: "",
    };

    const [formData, setFormData] = useState<User>(initialFormState);
    const [errors, setErrors] = useState(initialErrorState);
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showStrengthHint, setShowStrengthHint] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handlePrevent = (e: React.ClipboardEvent) => {
        e.preventDefault();
        showSnackbar(`${e.type} action is disabled for security.`, "warning");
    };

    const validateForm = () => {
        const newErrors = {
            userName: validateUserName(formData.userName),
            email: validateEmail(formData.email),
            createPassword: validateSignUpPassword (formData.createPassword),
            confirmPassword: validateConfirmPassword(formData.createPassword, formData.confirmPassword),
        };

        setErrors(newErrors);

        for (const key in newErrors) {
            if (newErrors[key as keyof typeof newErrors]) {
                showSnackbar(newErrors[key as keyof typeof newErrors], "error");
                return false;
            }
        }

        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        try {
            showSnackbar("User registered successfully!", "success");
            setFormData(initialFormState);
            setErrors(initialErrorState);
            navigate("/login");
        } catch (error) {
            showSnackbar("Something went wrong!");
        }
    };

    const handleClear = () => {
        setFormData(initialFormState);
        setErrors(initialErrorState);
    };

    const passwordStrength = getPasswordStrength(formData.createPassword);

    return (
        <Box
            className="rootBox"
            sx={{
                minHeight: "100vh",
                px: { xs: 2, sm: 4 },
                py: { xs: 3, sm: 5 },
            }}
        >
            <Card
                className="signUp-card"
                sx={{
                    maxWidth: { xs: "95%", sm: "420px" },
                    p: { xs: 3, sm: 4 },
                }}
            >
                <Grid
                    p={{ xs: 2, sm: 2 }}
                >
                    <Typography
                        variant="h5"
                        className="title"
                        sx={{
                            mb: 3,
                            fontSize: { xs: "1.8rem", sm: "2rem" },
                        }}
                    >
                        Sign Up
                    </Typography>

                    <form onSubmit={handleSubmit} noValidate>
                        <CommonTextField
                            label="User Name"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            error={!!errors.userName}
                            className="login-field"
                            required
                        />

                        <CommonTextField
                            label="Email"
                            name="email"
                            type="email"
                            className="login-field"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            required
                        />

                        <Box sx={{ position: "relative" }}>
                            <CommonTextField
                                label="Create Password"
                                name="createPassword"
                                className="login-field"
                                value={formData.createPassword}
                                error={!!errors.createPassword}
                                showPasswordToggle
                                showPassword={showCreatePassword}
                                setShowPassword={setShowCreatePassword}
                                onBlur={() => setTimeout(() => setShowStrengthHint(false), 150)}
                                onChange={(e) => {
                                    handleChange(e); if (e.target.value.length > 0) {
                                        setShowStrengthHint(true);
                                    } else {
                                        setShowStrengthHint(false);
                                    }
                                }}
                                onCopy={handlePrevent}
                                onCut={handlePrevent}
                                onPaste={handlePrevent}
                                required
                            />
                            <PasswordStrengthSnackbar
                                show={showStrengthHint}
                                password={formData.createPassword}
                                strength={{
                                    ...passwordStrength,
                                    color: passwordStrength.color as PasswordStrength["color"],
                                }}
                                onClose={() => setShowStrengthHint(false)}
                                autoHideDuration={1000}
                            />
                        </Box>

                        <CommonTextField
                            label="Confirm Password"
                            name="confirmPassword"
                            className="login-field"
                            value={formData.confirmPassword}
                            error={!!errors.confirmPassword}
                            showPasswordToggle
                            showPassword={showConfirmPassword}
                            setShowPassword={setShowConfirmPassword}
                            onChange={handleChange}
                            onPaste={handlePrevent}
                            required
                        />

                        <CardActions
                            sx={{
                                flexDirection: "column",
                                gap: 2.5,
                                mt: 3,
                                px: 0,
                            }}
                        >
                            <CommonButton
                                type="submit"
                                variant="contained"
                                fullWidth
                                className="registerBtn"
                                sx={{
                                    padding: "0.75rem",
                                    fontSize: "0.95rem",
                                }}
                            >
                                Sign Up
                            </CommonButton>

                            <CommonButton
                                type="button"
                                variant="outlined"
                                fullWidth
                                className="clearBtn"
                                onClick={handleClear}
                                sx={{
                                    padding: "0.75rem",
                                    fontSize: "0.95rem",
                                }}
                            >
                                Clear
                            </CommonButton>
                        </CardActions>
                    </form>
                </Grid>
            </Card>
        </Box>
    );
};

export default SignUp;
