import { createTheme } from "@mui/material";

const typographyTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#fff",
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 9,
            color: "blue",
          },
        },
      ],
    },
  },
});
export default typographyTheme