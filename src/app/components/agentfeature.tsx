import { Box, Button, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function AgentFeature() {
  return (
    <Box sx={{ pt: 0, pb: "50rem" }}>
      <Grid container sx={{ flexGrow: 1, justifyContent: "center" }}>
        <Grid size={12}>
          <Box
            sx={{
              position: "absolute",
              width: "30rem",
              ml: "15rem",
              mr: "2rem",
              zIndex: 1,

            }}
          >
            <img
              src="/asset_6.jpeg"
              width="100%"
              height="100%"
              className="box1"
            />
          </Box>
        </Grid>
        <Grid size={12}>
          <Box
            sx={{
              position: "absolute",
              width: "50rem",
              height: "20rem",
              ml: "15rem",
              mr: "2rem",
              background: "black",
              zIndex: -1, // เพิ่ม zIndex ตรงนี้
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}
