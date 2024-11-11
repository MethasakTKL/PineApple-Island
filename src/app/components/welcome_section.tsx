import { Box, Paper, Typography } from "@mui/material";

export default function WelSection() {
  return (
    <Box
      sx={{
        pt: "1rem",
        pb: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 720,
          width: "auto",
          pl: "20rem",
          clipPath: "polygon(50% 0%,100% 0%,100% 100%,80% 80%,0% 100%,0% 0%)",
        }}
        alt="The house from the offer."
        src="/asset_1.jpeg"
      />
      <Paper
        sx={{
          width: 560,
          height: 350,
          background: "#0d204e",
          position: "absolute",
          top: 200,
          right: "45rem",
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
  );
}
