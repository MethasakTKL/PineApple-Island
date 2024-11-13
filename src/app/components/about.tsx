import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function About() {
  return (
    <Box
      sx={{
        pt: "1rem",
        pb: "5rem",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "flex-end",
          pl: "22rem",
          pt: 10,
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Paper
          elevation={6}
          sx={{
            background: "#0d204e",
            width: 850,
            height: 450,
            borderRadius: 0,
          }}
        >
          <Grid container>
            <Grid>
              <Box
                component="img"
                src="/asset_2.jpeg"
                sx={{ background: "#f2cf45", width: 475, height: 450 }}
              ></Box>
            </Grid>
            <Grid>
              <Box sx={{ width: 375, height: 450 }}>
                <Typography
                  margin={10}
                  sx={{
                    color: "white",
                    fontFamily: "Manrope",
                    fontWeight: 300,
                  }}
                >
                  Pineapple Island is the most sought-after community in Ibadan
                  that values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development.
                  A perfect, professional built abode that gives you the true
                  taste of beauty and happiness.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
        <Box
          position="absolute"
          sx={{
            width: 200,
            height: 250,
            marginRight: 120,
            marginTop: 10,
          }}
        >
          <Typography
            sx={{
              color: "#0d204e",
              fontSize: 50,
              fontFamily: "Playfair Display",
              fontWeight: 600,
              lineHeight: 1.25,
            }}
          >
            About Pineapple Island
          </Typography>
        </Box>
      </Grid>
      <Box
        sx={{
          pt: "1rem",
          pb: "1rem",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <Grid container>
          <Grid size={12}>
            <Typography
              sx={{
                color: "#0d204e",
                fontSize: 40,
                fontFamily: "Playfair Display",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",
                left: "50%",
                transform: "translateX(-50%)",

                pt: "1rem",
                pl: "100%",
                pr: "1rem",
                pb: "2rem",
              }}
            >
              About <br />
              Pineapple Island
            </Typography>
          </Grid>
          <Grid size={12}>
            <Box
              sx={{
                height: 140,
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: {xs:350,sm:300},
                  position: "absolute",
                  background: "black",
                  opacity: 0.6,
                }}
              />

              <Typography
                sx={{
                  position: "absolute",
                  color: "white",
                  fontSize: 15,
                  fontWeight: 300,
                  fontFamily: "Manrope",
                  textAlign: "center",
                  width: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",

                  pt: "8%",
                  pl: "2rem",
                  pr: "2rem",
                }}
              >
                Pineapple Island is the most sought-after community in Ibadan
                that values and puts the needs of their clients first. It is a
                territory with loft complexes that creates a country life and
                homely feeling that is integrated with industrial development. A
                perfect, professional built abode that gives you the true taste
                of beauty and happiness.
              </Typography>

              <Box
                component="img"
                src="/asset_2.jpeg"
                sx={{ width: "100%", height: {xs:350,sm:300} }}
                className="box1"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
