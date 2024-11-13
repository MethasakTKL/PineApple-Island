import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Intro() {
  return (
    <Box>
      <Box
        sx={{
          pt: "1rem",
          pb: "1rem",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Box
          sx={{
            height: 700,
            width:  {md:"50rem",lg:"60rem",xl:"70rem"},
            pl: "12rem",
            clipPath: "polygon(50% 0%,100% 0%,100% 100%,80% 80%,0% 100%,0% 0%)",
          }}
        >
          <img src="/asset_1.jpeg" width="100%" height="720" className="box1" />
        </Box>
        <Paper
          sx={{
            width: 560,
            height: 350,
            background: "#0d204e",
            position: "absolute",
            top: 200,
            right: {md:"30rem",lg:"45rem",xl:"60rem"},
            borderRadius: 0,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: 48,
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
              pl: 5,
              pr: 5,
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Paper>
      </Box>
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
        <Box
          sx={{
            height: 720,
            width: "100%",
            clipPath: "polygon(50% 0%,100% 0%,100% 100%,80% 85%,0% 100%,0% 0%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: 720,
              position: "absolute",
              background: "black",
              opacity: 0.6,
            }}
          />

          <Typography
            sx={{
              position: "absolute",
              color: "white",
              fontSize: "22pt",
              fontFamily: "Playfair Display",
              fontWeight: 600,
              textAlign: "center",
              width: "100%",
              left: "50%",
              transform: "translateX(-50%)",

              pt: "10rem",
              pb:"2rem",
              pl: "1rem",
              pr: "1rem",
            }}
          >
            Pineapple Island: <br />
            Gen Z and Millenial Abodea
          </Typography>

          <Typography
            sx={{
              position: "absolute",
              color: "white",
              fontSize: 15,
              fontWeight: 300,
              fontFamily: "Manrope",
              textAlign: "center",
              width: "90%",
              left: "50%",
              transform: "translateX(-50%)",

              pt: "20rem",
              pl: "2rem",
              pr: "2rem",
            }}
          >
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              position: "absolute",
              background: "white",
              top: "30rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, md: 15 },
                color: "#0E204E",
                fontWeight: 100,
                textTransform: "none",
              }}
            >
              Get in Touch
            </Typography>
          </Button>
          <img src="/asset_1.jpeg" width="100%" height="720" className="box1" />
        </Box>
      </Box>
    </Box>
  );
}
