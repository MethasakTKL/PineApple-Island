import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    const formData = {
      email: email,
    };
    console.log(formData);
  };
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: "#0d204e",
          height: 350,
          clipPath: "polygon(10% 15%,100% 33%,100% 100%,0% 100%,0% 35%)",
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} sx={{ pt: "7rem" }}>
          <Grid>
            <Stack width={"400px"}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 37,
                  fontFamily: "Manrope",
                  fontWeight: 400,
                }}
              >
                Banana
                <br />
                Island
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontWeight: 200,
                  width: "16rem",
                  mt: "0.5rem",
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
            </Stack>
          </Grid>
          <Grid>
            <Stack width={"400px"}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15pt",
                  fontFamily: "Playfair Display",
                  fontWeight: 400,
                  mt: "2.5rem",
                }}
              >
                Follow up
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manrope",
                  fontWeight: 200,
                  width: "16rem",
                  mt: "0.5rem",
                }}
              >
                Keep up with our newsletter to get updates about projects and
                offers
              </Typography>
              <FormControl>
                <OutlinedInput
                  id="filled-basic"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <Button onClick={handleSubscribe}>
                        <Typography
                          sx={{
                            fontFamily: "Gotham",
                            fontSize: "10pt",
                            color: "#0E204E",
                            textTransform: "none",
                          }}
                        >
                          Subscribe
                        </Typography>
                      </Button>
                    </InputAdornment>
                  }
                  sx={{
                    background: "white",
                    width: 330,
                    height: 40,
                    marginTop: 2,
                    borderRadius: 0,
                    fontFamily: "Gotham",
                  }}
                  inputProps={{
                    style: {
                      fontFamily: "Gotham",
                      fontSize: "12pt",
                      color: "#666666",
                    },
                  }}
                />
              </FormControl>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "#0d204e",
          height: 150,
          display: {
            xs: "flex",
            md: "none",
          },
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} sx={{ pt: "2.5rem", textAlign: "center" }}>
          <Grid>
            <Stack width={"400px"}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: 400,
                  fontFamily: "Manrope",
                }}
              >
                Pineapple Island
              </Typography>
              <Box
                sx={{
                  // background: "yellow",
                  display: "flex",
                  justifyContent: "center",
                  gap:0.5,
                  mt:"0.5rem"
                }}
              >
                <img src="/emojione_copyright.svg" alt="copyright" width={20} />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 13,
                    fontWeight: 100,
                    fontFamily: "Gotham-thin",
                  }}
                >
                  Copyright2021 Glowdsgn All Rights Reserved
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
