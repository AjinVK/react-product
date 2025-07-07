import React, { useState } from 'react';
import {
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material';
import { EyelashEye, EyelashEyeOff } from '../../assets/icons/EyelashEye';

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
    onBlur?: () => void;
    onCopy?: (e: React.ClipboardEvent<any>) => void;
    onCut?: (e: React.ClipboardEvent<any>) => void;
    onPaste?: (e: React.ClipboardEvent<any>) => void;
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
    onBlur,
    onCopy,
    onCut,
    onPaste
}: CommonTextFieldProps) => {
    const [bounceToggle, setBounceToggle] = useState(false);

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
                            onClick={() => {
                                setShowPassword((prev) => !prev);
                                setBounceToggle(true);
                                setTimeout(() => setBounceToggle(false), 300);
                            }}
                            edge="end"
                            // className="login-icon-button"
                            sx={{ p: 0.7 }}
                        >
                            <span className={bounceToggle ? 'bounce-icon' : ''}>
                                {showPassword ? (
                                    <EyelashEye color="#5119B7" size={21} />
                                ) : (
                                    <EyelashEyeOff color="#5119B7" size={21} />
                                )}
                            </span>
                        </IconButton>
                    </InputAdornment>
                ),
            };
        }
        return undefined;
    };

    const handlePreventCopyPaste = (
        e: React.ClipboardEvent<any>,
        customHandler?: (e: React.ClipboardEvent<any>) => void
    ) => {
        e.preventDefault();
        if (customHandler) customHandler(e);
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
            onBlur={onBlur}
            onCopy={(e) => handlePreventCopyPaste(e, onCopy)}
            onCut={(e) => handlePreventCopyPaste(e, onCut)}
            onPaste={(e) => handlePreventCopyPaste(e, onPaste)}
        />
    );
};

export default CommonTextField;

