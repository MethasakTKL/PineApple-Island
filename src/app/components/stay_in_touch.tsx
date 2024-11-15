import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function StayInTouch() {
  return (
    <Box sx={{ pt: 5, pb: 10 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontSize: {xs:36,md:48},
          fontWeight: "bold",
          color: "#0d204e",
        }}
      >
        Stay In Touch
      </Typography>
      <Typography sx={{ textAlign: "center", fontFamily:"Manrope",pt: 3 }}>
        Are you curious about Pineapple Island? Send a message
      </Typography>
      <Grid container justifyContent={"center"}>
        <Stack direction={"column"} spacing={1} paddingTop={3}>
          <TextField
            label="Name"
            id="fullWidth"
            sx={{ width: {xs:'22rem',lg:"40rem"}}}
          />
          <TextField
            label="Phone No"
            id="fullWidth"
            
          />
          <TextField
            label="Email"
            id="fullWidth"
          />
          <TextField
            label="Message"
            multiline
            rows={6}

            id="fullWidth"
          />
         
        </Stack>
      </Grid>
      <Grid container justifyContent={"center"} sx={{ pt: 2 }}>
        <Button
          variant="contained"
          disableElevation
          sx={{ background: "#0E204E", borderRadius: 0, width: 100 }}
        >
          <Typography
            sx={{ fontSize: 15, fontWeight: 100, textTransform: "none" }}
          >
            Send
          </Typography>
        </Button>
      </Grid>
    </Box>
  );
}
