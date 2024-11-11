import { Box, Paper, Typography } from "@mui/material";

export default function WelSection() {
  return (
    <Box sx={{ pt: 2, pb: 2 }}>
      <Box
        component="img"
        sx={{
          height: 720,
          width: 1000,
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
          left: 70,
          borderRadius:0,
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
