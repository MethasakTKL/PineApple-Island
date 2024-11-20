import { useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export default function About() {
  const images = ["/asset_2.jpeg", "/asset_8.jpeg", "/asset_9.jpeg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
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
                fontSize: { md: "45pt", lg: "48pt" },
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
              width: "100%",
              height: 520,
              borderRadius: 0,
            }}
          >
            <Grid container>
              <Grid size={8}>
                <Box
                  sx={{
                    background: "pink",
                    width: "auto",
                    maxWidth: "29%",
                    height: 520,
                    position: "absolute",
                  }}
                >
                  <img
                    src={images[currentImageIndex]}
                    alt={`slide-${images[currentImageIndex]}`}
                    width="100%"
                    height="100%"
                    className="box1"
                  />
                </Box>
                <Box
                  sx={{
                    width: "26%",
                    height: 520,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    // background:"purple",
                    ml: 3.5,
                  }}
                >
                  <Grid
                    container
                    size={12}
                    sx={{
                      width: "100%",
                    }}
                  >
                    <Grid
                      size={6}
                      sx={{
                        display: "flex",
                        // background: "yellow",
                        justifyContent: "flex-start",
                      }}
                    >
                      <IconButton onClick={handlePrevious}>
                        <ArrowBackIos sx={{ color: "white" }} />
                      </IconButton>
                    </Grid>
                    <Grid
                      size={6}
                      sx={{
                        display: "flex",
                        // background: "green",
                        justifyContent: "flex-end",
                      }}
                    >
                      <IconButton onClick={handleNext}>
                        <ArrowForwardIos sx={{ color: "white" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid size={4}>
                <Box
                  sx={{
                    width: "100%",
                    height: 520,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { md: "11pt", xl: "13pt" },
                      fontFamily: "Manrope",
                      fontWeight: 300,
                      textAlign: "flex-start",
                      width: "100%",
                      paddingLeft: "rem",
                      paddingRight: "2rem",
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
                fontSize: "25pt",
                fontFamily: "Playfair Display",
                fontWeight: 600,
                textAlign: "center",
                width: "auto",

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
                  background: "#474747",
                  opacity: 0.6,
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: { xs: "30rem", sm: 300 },
                  position: "absolute",
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: 17,
                    fontWeight: 400,
                    fontFamily: "Manrope",
                    textAlign: "center",
                    width: "60%",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
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
        </Grid>
      </Box>
    </Box>
  );
}
