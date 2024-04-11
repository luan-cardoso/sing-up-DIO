import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#FFFF',
        }
    },

    typography: {
        button: {
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '0.14em',
          },
        fontFamily: 'Open Sans',
    },

   
})

export default function ButtonUsage (props) {
  return <ThemeProvider theme={Theme}>
            <Button 
                onClick={props.onClick}
                href={props.link} 
                variant="outlined" 
                > 
                {props.name}
            </Button>
        </ThemeProvider>;
}