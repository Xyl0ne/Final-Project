import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        mode: 'dark', // or 'light'
        primary: { main: '#161515' },
        secondary: { main: '#d2d6e3' },
        background: {
            default: '#121111',
            paper: '#1E1E1E',
        },
        typography: {
            fontFamily: '"Inter", "Roboto", sans-serif',
            h4: { fontWeight: 700 },
            h5: { fontWeight: 600 },
            h6: { fontWeight: 600 },
            span: { fontWeight: 700 },
            button: { textTransform: 'none' },
        },
        text: {
            primary: '#E0E0E0',
            secondary: '#9094a2',
        },
        

    },
});

export default theme;