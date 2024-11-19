"use client";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Grid from "@mui/material/Grid2";
import StayInTouch from "./components/stay_in_touch";
import Footer from "./components/footer";
import Galleries from "./components/galleries";
import Offer from "./components/offer";
import Reason from "./components/reason";
import FeatureAgent from "./components/feature_agent";
import About from "./components/about";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Playfair_Display",
      "Manrope",
      "Lato",
      "Roboto",
      "Poppins",
    ].join(","),
  },
});
export default function Home() {
  return (
    <ThemeProvider theme={theme} >
      <NavBar />
      <Grid
        container
        sx={{
          flexGlow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          size={12}
          sx={{
            paddingTop: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Intro />
        </Grid>
        <Grid
          id="about"
          size={12}
          sx={{
            paddingTop: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <About />
        </Grid>
        <Grid
          id="whatwedo"
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Reason />
        </Grid>
        <Grid
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Offer />
        </Grid>
        <Grid
          id="project"
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Galleries />
        </Grid>
        <Grid
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FeatureAgent />
        </Grid>
        <Grid
          id="getintouch"
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <StayInTouch />
        </Grid>
        <Grid
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom: "0rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
