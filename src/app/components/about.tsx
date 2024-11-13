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
          pt: 10,
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Grid size={5}>
          <Box
            sx={{
              width: 200,
              height: 250,
              marginTop: "10rem",
              marginLeft: { md: "20%", lg: "38%" },
              textAlign: "left",
            }}
          >
            <Typography
              sx={{
                color: "#0d204e",
                fontSize: {md:"45pt",lg:"50pt"},
                fontFamily: "Playfair Display",
                fontWeight: 600,
                lineHeight: 1.25,
              }}
            >
              About Pineapple Island
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Paper
            elevation={6}
            sx={{
              background: "#0d204e",
              width: "auto",
              height: 520,
              borderRadius: 0,
            }}
          >
            <Grid container>
              <Grid size={7}>
                <Box sx={{ background: "pink", width: "100%", height: 520 }}>
                  <img
                    src="/asset_2.jpeg"
                    width="100%"
                    height="100%"
                    className="box1"
                  />
                </Box>
              </Grid>
              <Grid size={5}>
                <Box sx={{ width: "100%", height: 520 }}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { md: "11pt", xl: "15pt" },
                      fontFamily: "Manrope",
                      fontWeight: 300,
                      pl: "2rem",
                      pr: "2rem",
                      pt: { md: "2rem", xl: "6rem" },
                      pb: "5rem",
                    }}
                  >
                    Pineapple Island is the most sought-after community in
                    Ibadan that values and puts the needs of their clients
                    first. It is a territory with loft complexes that creates a
                    country life and homely feeling that is integrated with
                    industrial development. A perfect, professional built abode
                    that gives you the true taste of beauty and happiness.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* <Grid size={4}>
          <Box
            sx={{
              width: 200,
              height: 250,
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
        <Grid size={8}>
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
                    Pineapple Island is the most sought-after community in
                    Ibadan that values and puts the needs of their clients
                    first. It is a territory with loft complexes that creates a
                    country life and homely feeling that is integrated with
                    industrial development. A perfect, professional built abode
                    that gives you the true taste of beauty and happiness.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid> */}
      </Grid>
      {/* xs------------------------------------------------------------------------------------ */}
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
        <Grid container sx={{ textAlign: "center", width: "100%" }}>
          <Grid size={12}>
            <Typography
              sx={{
                color: "#0d204e",
                fontSize: 40,
                fontFamily: "Playfair Display",
                fontWeight: 600,
                textAlign: "center",
                width: "100%",

                pt: "1rem",
                pr: "2rem",
                pb: "2rem",
              }}
            >
              About <br />
              Pineapple Island
            </Typography>
          </Grid>
          <Grid size={12}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: { xs: "30rem", sm: 300 },
                  position: "absolute",
                  background: "#1f1f1f",
                  opacity: 0.6,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  height: { xs: "30rem", sm: 300 },
                  position: "absolute",
                }}
              >
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

                    pt: { xs: "15%", sm: "10%" },
                    pl: "2rem",
                    pr: "2rem",
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
              <Box
                component="img"
                src="/asset_2.jpeg"
                sx={{ width: "100%", height: { xs: "30rem", sm: 300 } }}
                className="box1"
              />
            </Box>
          </Grid>

          {/* <Grid size={12}>
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
                  height: { xs: "30rem", sm: 300 },
                  position: "absolute",
                  background: "#1f1f1f",
                  opacity: 0.6,
                }}
              />
           <Box
                component="img"
                src="/asset_2.jpeg"
                sx={{ width: "100%", height: { xs: "30rem", sm: 300 } }}
                className="box1"
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

                  pt: { xs: "15%", sm: "10%" },
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

   
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
}
