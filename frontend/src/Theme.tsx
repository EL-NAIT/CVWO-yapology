import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#e6ddd6',
        },
        secondary: {
            main: '#970de8d3',
        },
    },
    typography: {
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'Sans-serif'].join(','),
    },
});

export default theme;