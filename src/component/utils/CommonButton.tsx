import React from 'react';
import { Button } from '@mui/material';

interface CommonButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'contained' | 'outlined' | 'text';
    onClick?: () => void;
    fullWidth?: boolean;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
}

const CommonButton = ({
    type = 'button',
    variant = 'contained',
    onClick,
    fullWidth = false,
    className = '',
    disabled = false,
    children,
}: CommonButtonProps) => {
    return (
        <Button
            type={type}
            variant={variant}
            onClick={onClick}
            fullWidth={fullWidth}
            className={className}
            disabled={disabled}
        >
            {children}
        </Button>
    );
};

export default CommonButton;
