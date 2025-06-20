import React from 'react';
import {
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material';
import {
    VisibilityOutlined,
    VisibilityOffOutlined,
} from '@mui/icons-material';

interface CommonTextFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    variant?: 'standard' | 'outlined' | 'filled';
    required?: boolean;
    error?: boolean;
    helperText?: string;
    showPasswordToggle?: boolean;
    showPassword?: boolean;
    setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
    className?: string;
}

const CommonTextField = ({
    label,
    name,
    value,
    onChange,
    type = 'text',
    variant = 'standard',
    required = false,
    error = false,
    helperText = '',
    showPasswordToggle = false,
    showPassword,
    setShowPassword,
    className,
}: CommonTextFieldProps) => {
    const getInputType = () => {
        if (showPasswordToggle && showPassword !== undefined) {
            return showPassword ? 'text' : 'password';
        }
        return type;
    };

    const getInputProps = () => {
        if (showPasswordToggle && setShowPassword) {
            return {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                            edge="end"
                            className="login-icon-button"
                        >
                            {showPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                        </IconButton>
                    </InputAdornment>
                ),
            };
        }
        return undefined;
    };

    return (
        <TextField
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            type={getInputType()}
            variant={variant}
            margin="normal"
            className={className}
            required={required}
            fullWidth
            error={error}
            helperText={helperText}
            InputProps={getInputProps()}
        />
    );
};

export default CommonTextField;
