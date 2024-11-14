import { Box, Paper,Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Reason() {
  return (
    <Box>
      <Grid
        container
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Grid size={12} sx={{ position: "relative" }}>
          <Box
            sx={{
              justifyContent: "center",
              background: "#0d204e",
              width: "100%",
              height: "36rem",
              clipPath:
                "polygon(50% 0%,100% 0%,100% 100%,80% 80%,0% 100%,0% 0%)",
            }}
          />
        </Grid>
        <Grid container size={12} sx={{ position: "absolute", pt: "8rem" }}>
          <Grid size={5}>
            <Box
              sx={{
                width: "30%",
                height: 250,
                marginBottom: "rem",
                marginLeft: { md: "20%", lg: "38%" },
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: { md: "45pt", lg: "48pt" },
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                Why Choose Pineapple Island
              </Typography>
            </Box>
          </Grid>
          <Grid size={7}>
            <Paper
              elevation={6}
              sx={{
                background: "white",
                width: "auto",
                minWidth: "28rem",
                height: 520,
                borderRadius: 0,
                mr: "150px",
              }}
            >
              <Grid container>
                <Grid size={5.5}>
                  <Box
                    sx={{
                      width: "auto",

                      height: 520,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#0d204e",
                        fontSize: { md: "11pt", xl: "15pt" },
                        fontFamily: "Manrope",
                        fontWeight: 300,
                        textAlign: "center",
                        width: "100%",
                        paddingLeft: "2rem",
                        paddingRight: "2rem",
                      }}
                    >
                      Pineapple Island is the most sought-after community in
                      Ibadan that values and puts the needs of their clients
                      first. It is a territory with loft complexes that creates
                      a country life and homely feeling that is integrated with
                      industrial development. A perfect, professional built
                      abode that gives you the true taste of beauty and
                      happiness.
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={6.5}>
                  <Box sx={{ background: "pink", width: "100%", height: 520 }}>
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
        <Grid
          container
          sx={{
            justifyContent: "center",
            pt: "1rem",
            pb: "1rem",
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
            pb: {xs:"25rem",sm:"20rem",md:"10rem"},
          }}
        >
          <Grid container spacing={2} sx={{ textAlign: "center" }}>
            <Grid>
              <Typography
                sx={{
                  fontSize: "25pt",
                  color: "#0d204e",
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  lineHeight: 1.25,
                }}
              >
                Why Choose <br/>Pineapple Island
              </Typography>
              <Typography
                margin={3}
                sx={{ color: "#0E204E", fontFamily: "Manrope" }}
              >
                Pineapple Island is the most sought-after community in Ibadan
                that values and puts the needs of their clients first. It is a
                territory with loft complexes that creates a country life and
                homely feeling that is integrated with industrial development. A
                perfect, professional built abode that gives you the true taste
                of beauty and happiness.
              </Typography>
              <Box>
                <img
                  src="/asset_3.jpeg"
                  width="100%"
                  height="270rem"
                  className="box1"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
