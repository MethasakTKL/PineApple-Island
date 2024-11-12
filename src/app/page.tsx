"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Grid from "@mui/material/Grid2";
import ContactForm from "./components/contactform";
import Footer from "./components/footer";
import Galleries from "./components/galleries";
import Offer from "./components/offer";
import Reason from "./components/reason";
import AgentFeature from "./components/agentfeature";
import About from "./components/about";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Grid
        container
        sx={{
          paddingTop: 10,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Intro />
      </Grid>
      {/* <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <About />
      </Grid>

      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Offer />
      </Grid>

   */}
      {/* <Grid
        container
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <AgentFeature />
      </Grid> */}
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Reason />
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Galleries />
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ContactForm />
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Footer />
      </Grid>
    </Box>
  );
}
