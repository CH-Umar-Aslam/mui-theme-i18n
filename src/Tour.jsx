import React from 'react'

import { BottomNavigation, BottomNavigationAction, Box, Container, Typography } from '@mui/material'
import StandardImageList from './ImageCollage'
import AccordionUsage from './Accordian'
import { Paper } from '@mui/material'
import BasicModal from './Modal'
function Tour() {
  return (
    <Container sx={{
      marginY: 6,
      width: 900
    }}
    >
      <Typography marginY={2} variant={"h3"} component={"h2"}>Explore the world with vegas   </Typography>
      <Box margintop={3} sx={{
        display: "flex",

      }}>
        <img src="https://d2ru2mvuh5wx24.cloudfront.net/avtivity_bootstrap/1241/flight_of_angels_3__1920x864.jpg" alt="" width={500} height={325} />
        <StandardImageList />
      </Box>
      <Box>

        <Box marginY={3}>
          <Typography variant='h5' fontWeight={600} component={"h3"}>
            About this Place
          </Typography>
          <Typography variant="body" component={"body2"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, sed iste? Quidem quis, quasi magni illum ex reiciendis, perspiciatis quo deleniti eligendi, cum esse vitae iste corrupti excepturi! Pariatur repellendus est fuga quia? Iusto rerum nostrum eaque? Totam pariatur voluptas reiciendis blanditiis magnam deserunt quas!
          </Typography>
        </Box>
        <Box>
          <Typography marginY={2} variant='h5' fontWeight={600} component={"h3"}>
            Frequently Asked Questions
          </Typography>
          <AccordionUsage />
          <Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation

              >
                <BasicModal />
              </BottomNavigation>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Container >
  )
}

export default Tour