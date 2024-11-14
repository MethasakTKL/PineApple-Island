"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography } from "@mui/material";
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
          size={12}
          sx={{
            paddingTop: "2rem",
            paddingBottom:"2rem",
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
          <AgentFeature />
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
          <ContactForm />
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
    </Box>
  );
}
