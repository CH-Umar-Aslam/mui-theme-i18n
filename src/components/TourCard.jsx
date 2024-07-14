import React from 'react'
import { Box, Paper, Rating, ThemeProvider, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import { createTheme } from '@mui/material'
import "../index.css"
const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2"
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3"
          },
          style: {
            fontSize: 13,
            text: {
              primary: "!important#843920",
              secondary: "#02021"
            }
          },
        }
      ],
    },
  },


});

function TourCard({ tour }) {




  return (
    <Grid item lg={3}>

      <ThemeProvider theme={theme}>

        <Paper elevation={3} >
          <img className='img' src={tour?.image} alt="" />
          <Box paddingX={1}>
            <Typography variant='subtitle1' component='h2'>
              {tour?.name}
            </Typography>
            <Box sx={{

              display: "flex",
              marginTop: "5px",
              alignItems: "center"
            }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body3" component="p" marginLeft={0.5}>
                {tour?.duration} hours
              </Typography>
            </Box>

            <Box sx={{

              display: "flex",
              alignItems: "center"
            }}
              marginTop={3}
            >
              <Rating size="small" name="read-only" value={tour?.rating} readOnly precision={0.5} />
              <Typography variant="body1" component="p" marginLeft={0.5}>
                {tour?.rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={0.5}>
                ({tour?.numberOfReviews})
              </Typography>
            </Box>
            <Box>
              <Typography sx={{
                fontWeight: "bold",
              }} component={"h1"} variant="h5">From C ${tour?.price}</Typography>
            </Box>
          </Box>
        </Paper>


      </ThemeProvider>
    </Grid>
  )
}

export default TourCard