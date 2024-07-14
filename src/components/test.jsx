import { createTheme, Switch, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import { Typography } from "@mui/material"
import typographyTheme from "./theme/theme.jsx"
export default function Test() {
  const [lightTheme, setLightTheme] = useState(true);

  return (

    <ThemeProvider theme={typographyTheme}>
      <Typography sx={{
        color: `${lightTheme ? 'primary.main' : 'secondary.main'}`,
        backgroundColor: `${lightTheme ? 'secondary.main' : 'primary.main'}`,
      }}>

        <Typography

          variant="body1"
        >
          Hello World <Switch
            color="secondary"
            width='9px'
            value={lightTheme} onClick={() => setLightTheme(!lightTheme)} />
        </Typography>
        <h1>Dummy . xyz</h1>
        <p>This is a dummy test page.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi vero
          tempore, nemo, dignissimos, minima sint aliquam quibusdam neque quis
          vitae pariatur expedita? Commodi ex distinctio harum suscipit
          voluptates. Natus tempore eaque delectus expedita dicta!
        </p>
      </Typography>
    </ThemeProvider>
  );
}