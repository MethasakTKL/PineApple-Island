import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@mui/material";
import NavBar from "./components/navbar";
import WelSection from "./components/welcome_section";
import Grid from "@mui/material/Grid2";
import ContactForm from "./components/contactform";
import Footer from "./components/footer";
import Galleries from "./components/galleries";
import Offer from "./components/offer";
import Reason from "./components/raeson";
import AgentFeature from "./components/agentfeature";
export default function Home() {
  return (
    <Box>
      <NavBar />
      <Grid container sx={{ paddingTop: 10, justifyContent: "flex-end" }}>
        <WelSection />
      </Grid>
      <Grid>
        <Reason/>
      </Grid>
      <Grid>
        <Offer/>
      </Grid>
      <Grid>
        <Galleries/>
      </Grid>
      <Grid>
        <AgentFeature/>
      </Grid>
      <Grid>
        <ContactForm/>
      </Grid>
      <Grid>
        <Footer/>
      </Grid>

    </Box>
  );
}
