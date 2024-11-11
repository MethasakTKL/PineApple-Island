import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function AgentFeature() {
  return (
    <Box sx={{ pt: 0, pb: 30 }}>
      <Grid container pt={10} sx={{ justifyContent: "flex-start", pl: 10 }}>
        <Box
          component="img"
          position="absolute"
          src="/asset_6.jpeg"
          sx={{
            background: "#0d204e",
            width: 400,
            height: 500,
            marginLeft: 10,
          }}
        ></Box>
        <Box
          sx={{
            background: "#0d204e",
            width: 350,
            height: 250,
            marginLeft: 40,
            marginTop: 15,
          }}
        ></Box>
      </Grid>
      <Grid container pt={10} sx={{ justifyContent: "flex-end", pl: 10 }}>
        <Box
          component="img"
          position="absolute"
          src="/asset_7.jpeg"
          sx={{
            background: "#0d204e",
            width: 400,
            height: 500,
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
  );
}
