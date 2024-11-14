import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Intro() {
  return (
    <Box>
      <Grid
        sx={{
          pt: "1rem",
          pb: "1rem",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Grid size={10.5}>
          <Box
            sx={{
              height: 700,
              width: "auto",
              pl: "12rem",
              clipPath:
                "polygon(50% 0%,100% 0%,100% 100%,80% 80%,0% 100%,0% 0%)",
            }}
          >
            <img
              src="/asset_1.jpeg"
              width="100%"
              height="720"
              className="box1"
            />
          </Box>
        </Grid>

        <Paper
          sx={{
            width: "auto",
            minWidth: { md: 250, lg: 250 },
            maxWidth: { md: 500, lg: 550 },
            height: "auto",
            background: "#0d204e",
            position: "absolute",
            top: "20%",
            right: "60%",
            borderRadius: 0,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { md: 38, lg: 48 },
              fontFamily: "Playfair Display",
              fontWeight: 600,
              pt: 5,
              pl: 5,
              pr: 5,
            }}
          >
            Pineapple Island: GenZ and Millenial Abode
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: 15,
              fontWeight: 300,
              fontFamily: "Manrope",
              pt: 1,
              pb: 5,
              pl: 5,
              pr: 5,
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Paper>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "center",
          textAlign: "center",
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <Grid size={12}>
          <Box
            sx={{
              height: 720,
              width: "100%",
              clipPath:
                "polygon(50% 0%,100% 0%,100% 100%,80% 85%,0% 100%,0% 0%)",
            }}
          >
            <Box
              sx={{
                width: "97%",
                height: 720,
                justifyContent: "center",
                position: "absolute",
              }}
            >
              <img
                src="/asset_1.jpeg"
                width="100%"
                height="720"
                className="box1"
              />
            </Box>

            <Box
              sx={{
                width: "97%",
                height: 720,
                justifyContent: "center",
                position: "absolute",
                background: "black",
                opacity: 0.5,
              }}
            />
            <Grid container sx={{ position: "absolute", textAlign: "center" }}>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { xs: "25pt", sm: "27pt" },
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  textAlign: "center",
                  width: "100%",

                  pt: { xs: "50%", sm: "25%" },
                  pb: "1rem",
                  pl: "1rem",
                  pr: "1rem",
                }}
              >
                Pineapple Island: <br />
                Gen Z and Millenial Abodea
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: 15,
                  fontWeight: 300,
                  fontFamily: "Manrope",
                  textAlign: "center",
                  width: "90%",

                  pt: "1rem",
                  pl: { xs: "3rem", sm: "7rem" },
                  pr: { xs: "3rem", sm: "7rem" },
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
              <Grid
                size={12}
                sx={{ justifyContent: "center", textAlign: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: "white",
                    top: "2rem",
                    textTransform: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "12pt",
                      fontFamily: "Lato",
                      color: "#0d204e",
                    }}
                  >
                    Get in Touch
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
