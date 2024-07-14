import TourCard from "./TourCard"
import { Container, Typography } from "@mui/material"
import { Grid } from "@mui/material"
import SearchAppBar from "./AppBar"
import data from "../data.json"
function Home() {

  return (

    <div >
      <SearchAppBar />
      <Container sx={{
        marginY: 5
      }}>
        {data?.map((city) => (
          <>
            <Typography key={city.id} variant="h4" component="h4" marginY={5} >
              Top {city.name} Tour
              <Grid container sx={{
                paddingTop: 2
              }} spacing={3}>
                {city?.tours?.map((tour, index) => (
                  <TourCard key={index} tour={tour} />
                ))}
              </Grid>
            </Typography>
          </>
        ))}
      </Container>
    </div>
  )
}

export default Home
