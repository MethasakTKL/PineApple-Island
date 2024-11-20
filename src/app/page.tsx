"use client";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Grid from "@mui/material/Grid2";

//import components
import Intro from "./components/Intro";
import StayInTouch from "./components/StayInTouch";
import Footer from "./components/Footer";
import Galleries from "./components/Galleries";
import Offer from "./components/Offer";
import Reason from "./components/Reason";
import About from "./components/About";
import Agent from "./components/Agent";
import Feature from "./components/Feature";
import NavBar from "./components/NavBar";

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
    <ThemeProvider theme={theme}>
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
          <Feature />
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
          <Agent />
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
