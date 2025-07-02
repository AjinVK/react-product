import {
    createContext,
    useContext,
    useState,
    type ReactNode,
} from 'react';
import {
    Alert,
    Slide,
    Box,
    type SlideProps,
    type AlertColor,
} from '@mui/material';

type SnackbarItem = {
    id: number;
    message: string;
    severity: AlertColor;
    open: boolean;
};

type SnackbarContextType = {
    showSnackbar: (message: string, severity?: AlertColor) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({
    showSnackbar: () => { },
});

const MAX_SNACKBARS = 3;
const DISPLAY_TIME = 2000;
let snackbarId = 0;

const SlideTransition = (props: SlideProps) => (
    <Slide {...props} timeout={{ enter: 300, exit: 600 }} />
);

const getSlideDirection = (
    vertical: 'top' | 'bottom',
    horizontal: 'left' | 'center' | 'right'
): 'left' | 'right' | 'up' | 'down' => {
    if (vertical === 'top') return 'down';
    if (vertical === 'bottom') return 'up';
    if (horizontal === 'right') return 'left';
    if (horizontal === 'left') return 'right';
    return 'up';
};

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
    const [snackbars, setSnackbars] = useState<SnackbarItem[]>([]);
    const anchorOrigin = { vertical: 'top', horizontal: 'center' };
    const direction = getSlideDirection(anchorOrigin.vertical as any, anchorOrigin.horizontal as any);

    const showSnackbar = (message: string, severity: AlertColor = 'info') => {
        const isDuplicate = snackbars.some(
            (s) => s.message === message && s.severity === severity
        );
        if (isDuplicate) return;

        const id = snackbarId++;
        const newSnackbar: SnackbarItem = {
            id,
            message,
            severity,
            open: true,
        };

        setSnackbars((prev) => [...prev, newSnackbar].slice(-MAX_SNACKBARS));

        setTimeout(() => {
            setSnackbars((prev) =>
                prev.map((s) => (s.id === id ? { ...s, open: false } : s))
            );
        }, DISPLAY_TIME);

        setTimeout(() => {
            setSnackbars((prev) => prev.filter((s) => s.id !== id));
        }, DISPLAY_TIME + 600);
    };

    return (
        <SnackbarContext.Provider value={{ showSnackbar }}>
            {children}
            <Box
                sx={{
                    position: 'fixed',
                    top: 16,
                    right: 16,
                    zIndex: 1500,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                }}
            >
                {snackbars.map((snack) => (
                    <SlideTransition key={snack.id} in={snack.open} direction={direction}>
                        <Alert
                            severity={snack.severity}
                            sx={{ width: 'fit-content', minWidth: 300 }}
                        >
                            {snack.message}
                        </Alert>
                    </SlideTransition>
                ))}
            </Box>
        </SnackbarContext.Provider>
    );
};

export const useSnackbar = () => useContext(SnackbarContext);

