import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Offer() {
  return (
    <Box>
      <Box sx={{ pt: "10rem", pb: 10 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            fontSize: 48,
            fontWeight: "bold",
            color: "#0d204e",
          }}
        >
          What Pineapple Land Offers
        </Typography>

        <Grid container pt={10} sx={{ justifyContent: "flex-start", pl: 10 }}>
          <Box
            component="img"
            position="absolute"
            src="/asset_4.jpeg"
            sx={{
              background: "#0d204e",
              width: 400,
              height: 400,
              marginLeft: 10,
            }}
          ></Box>
          <Box
            sx={{
              background: "#0d204e",
              width: 350,
              height: 250,
              marginLeft: 40,
              marginTop: 10,
            }}
          ></Box>
        </Grid>
        <Grid container pt={10} sx={{ justifyContent: "flex-end", pl: 10 }}>
          <Box
            component="img"
            position="absolute"
            src="/asset_5.jpeg"
            sx={{
              background: "#0d204e",
              width: 400,
              height: 400,
              marginRight: 10,
            }}
          ></Box>
          <Box
            sx={{
              background: "#0d204e",
              width: 350,
              height: 250,
              marginRight: 40,
              marginTop: 10,
            }}
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
}
