import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        mode: 'dark', // or 'light'
        primary: { main: '#7C4DFF' },
        secondary: { main: '#FF4081' },
        background: {
            default: '#121212',
            paper: '#1E1E1E',
        },
    },
});


export default theme;