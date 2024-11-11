import { Box, Paper } from "@mui/material";

export default function WelSection() {
  return (
    <Box paddingTop={2}>
      <Box
        component="img"
        sx={{
          height: 620,
          width: 1000,
        }}
        alt="The house from the offer."
        src="/asset_1.jpeg"
      />
      <Paper
        sx={{
          width: 550,
          height: 350,
          background: "#0d204e",
          position: "absolute",
          top: 200,
          left: 70,
        }}
      ></Paper>
    </Box>
  );
}
