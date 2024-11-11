import { Box, Button, Typography } from "@mui/material";
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
        <Box
          position="absolute"
          sx={{
            background: "white",
            width: 400,
            height: 250,
            marginLeft: 90,
            marginTop: 1,
          }}
        >
          <Typography
            sx={{
              color: "#0d204e",
              fontSize: 50,
              fontFamily: "Playfair Display",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Amazing Features
          </Typography>
          <Typography sx={{ color: "black", pt: 2 }}>
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Box>
      </Grid>

      <Grid container pt={25} sx={{ justifyContent: "flex-end", pl: 10 }}>
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
            height: 350,
            marginRight: 40,
            marginTop: 10,
          }}
        ></Box>
        <Box
          position="absolute"
          sx={{
            background: "white",
            width: 350,
            height: 250,
            marginRight: 90,
            marginTop: 15,
          }}
        >
          <Typography
            sx={{
              color: "#0d204e",
              fontSize: 50,
              fontFamily: "Playfair Display",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Become an Agent
          </Typography>
          <Typography sx={{ color: "black", pt: 2 }}>
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
          <Grid container justifyContent={"flex-start"} sx={{ pt: 2 }}>
            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#0E204E", borderRadius: 0, width: 170,height:50 }}
            >
              <Typography
                sx={{ fontSize: 15, fontWeight: 100, textTransform: "none" }}
              >
                Join now
              </Typography>
            </Button>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
