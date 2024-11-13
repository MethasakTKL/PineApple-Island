import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Reason() {
  return (
    <Box>
      <Grid container>
        <Grid size={12}>
          <Grid
            container
            sx={{
              justifyContent: "center",
              pt: 10,
              pb: 10,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Grid size={12}>
              <Box
                sx={{
                  justifyContent: "center",
                  background: "#0d204e",
                  width: {md:"80rem",lg:"100rem",xl:"120rem"},
                  height: "32rem",
                  clipPath:
                    "polygon(50% 0%,100% 0%,100% 100%,80% 80%,0% 100%,0% 0%)",
                }}
              ></Box>
            </Grid>
            <Grid container sx={{ position: "absolute", width: "100rem" }}>
              <Grid size={12}>
                <Paper
                  elevation={6}
                  sx={{
                    background: "white",
                    width: {
                      md: 400,
                      lg: 850,
                      
                    },
                    height: 450,
                    marginLeft: {md:"40rem",lg:"30rem"},
                    marginTop: "7rem",
                    borderRadius: 0,
                  }}
                >
                  <Grid container>
                    <Grid>
                      <Box sx={{ width: 375, height: 450 }}>
                        <Typography
                          margin={10}
                          sx={{ color: "#0E204E", fontFamily: "Manrope" }}
                        >
                          Pineapple Island is the most sought-after community in
                          Ibadan that values and puts the needs of their clients
                          first. It is a territory with loft complexes that
                          creates a country life and homely feeling that is
                          integrated with industrial development. A perfect,
                          professional built abode that gives you the true taste
                          of beauty and happiness.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid>
                      <Box
                        sx={{
                          background: "#f2cf45",
                          width: 475,
                          height: 450,
                          display: {
                            md: "none",
                            lg:"flex"
                          },
                        }}
                      >
                        <img
                          src="/asset_3.jpeg"
                          width="100%"
                          height="100%"
                          className="box1"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>

            <Box
              position="absolute"
              sx={{
                width: 200,
                height: 250,
                marginRight: {md:"50rem",lg:"70rem"},
                marginTop: "10rem",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: 50,
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                Why Choose Pineapple Island
              </Typography>
            </Box>
          </Grid>
          <Grid
            container
            sx={{
              justifyContent: "center",
              pt: 10,
              pb: 10,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          ></Grid>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              height: 150,
              width: "100%",
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "center",
              pb: "30rem",
              pt: "10rem",
            }}
          >
            <Grid container spacing={2} sx={{ textAlign: "center" }}>
              <Grid>
                <Typography
                  sx={{
                    fontSize: 38,
                    color: "#0d204e",
                    fontFamily: "Playfair Display",
                    fontWeight: 600,
                    lineHeight: 1.25,
                  }}
                >
                  Why Choose Pineapple Island
                </Typography>
                <Typography
                  margin={3}
                  sx={{ color: "#0E204E", fontFamily: "Manrope" }}
                >
                  Pineapple Island is the most sought-after community in Ibadan
                  that values and puts the needs of their clients first. It is a
                  territory with loft complexes that creates a country life and
                  homely feeling that is integrated with industrial development.
                  A perfect, professional built abode that gives you the true
                  taste of beauty and happiness.
                </Typography>
                <Box>
                <img
                  src="/asset_3.jpeg"
                  width="95%"
                  height="75%"
                  className="box1"
                />
              </Box>
              </Grid>
     
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
