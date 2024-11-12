import { Box, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Footer() {
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
          clipPath: "polygon(20% 15%,100% 33%,100% 100%,0% 100%,0% 35%)",
          display: {
            xs: "none",
            md: "flex",
          },
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} sx={{ pt: "8rem" }}>
          <Grid>
            <Stack width={"400px"}>
              <Typography
                sx={{ color: "white", fontSize: 30, fontFamily: "Manrope" }}
              >
                Banana Island
              </Typography>
              <Typography sx={{ color: "white", fontFamily: "Manrope" }}>
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
                  fontSize: 30,
                  fontFamily: "Playfair Display",
                }}
              >
                Follow up
              </Typography>
              <Typography sx={{ color: "white", fontFamily: "Manrope" }}>
                Keep up with our newsletter to get updates about projects and
                offers
              </Typography>
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                sx={{ background: "white", width: 300, marginTop: 2 }}
              />
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
        <Grid container spacing={2} sx={{ pt: "2.5rem"  ,textAlign: "center",}}>
          <Grid>
            <Stack width={"400px"}>
              <Typography
                sx={{ color: "white", fontSize: 25, fontFamily: "Manrope" }}
              >
                Pineapple Island
              </Typography>
              <Typography
                sx={{ color: "white", fontSize: 15,fontWeight:300, fontFamily: "Manrope" }}
              >
                &#169; Copyright 2021 Glowdsgn All Rights Reserved
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
