import { createTheme } from '@mui/material/styles';
import {red, yellow} from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#CEB888',
        },
        secondary: {
            main: yellow.A100,
        },
        error: {
            main: red.A400,
        },
        mode: "dark"
    },
});

export default theme;