import React from 'react';
import { Button, type SxProps, type Theme } from '@mui/material';

interface CommonButtonProps {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'contained' | 'outlined' | 'text';
    // onClick?: () => void;
    fullWidth?: boolean;
    className?: string;
    disabled?: boolean;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

const CommonButton = ({
    type = 'button',
    variant = 'contained',
    // onClick,
    fullWidth = false,
    className = '',
    disabled = false,
    children,
    sx = {},
}: CommonButtonProps) => {
    return (
        <Button
            type={type}
            variant={variant}
            // onClick={onClick}
            fullWidth={fullWidth}
            className={className}
            disabled={disabled}
            sx={sx}
        >
            {children}
        </Button>
    );
};

export default CommonButton;
