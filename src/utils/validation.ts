import { getPasswordStrength } from "./passwordUtils";

export type FormErrors = {
    email?: string;
    password?: string;
    [key: string]: string | undefined;
}

export const validateUserName = (name: string): string => {
    if (!name.trim()) {
        return "User name is required";
    }
    if (!/^[a-zA-Z0-9_]+$/.test(name)) {
        return "User name must contain only letters, numbers, and underscores";
    }
    return "";
};

export const validateEmail = (email: string): string => {
    if (!email.trim()) {
        return 'Email is required';
    }

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return 'Enter a valid email';
    }

    return '';
};

export const validateLoginPassword = (password: string): string => {
    if (!password.trim()) {
        return 'Password is required';
    }

    return '';
};

export const validateSignUpPassword = (password: string): string => {
    if (!password.trim()) {
        return 'Password is required';
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }

    const strength = getPasswordStrength(password);

    if (strength.label === 'Weak') {
        return 'Password is too weak. Use at least 6 characters, uppercase letters, numbers, and symbols.';
    }

    return '';
};

export const validateConfirmPassword = (password: string, confirmPassword: string): string => {
    if (!confirmPassword.trim()) {
        return 'Confirm Password is required';
    }
    if (confirmPassword !== password) {
        return 'Passwords do not match';
    }
    return '';
};

