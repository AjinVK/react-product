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

export const validatePassword = (password: string): string => {
    if (!password.trim()) {
        return 'Password is required';
    }

    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }

    return '';
};
