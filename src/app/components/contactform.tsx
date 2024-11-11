import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function ContactForm() {
  return (
    <Box sx={{ pt: 5, pb: 20 }}>
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
        Stay In Touch
      </Typography>
      <Typography sx={{ textAlign: "center", pt: 3 }}>
        Are you curious about Pineapple Island? Send a message
      </Typography>
      <Grid container justifyContent={"center"}>
        <Stack direction={"column"} spacing={1} paddingTop={3}>
          <TextField label="Name" id="fullWidth" sx={{ width: 600 }} />
          <TextField label="Phone No" id="fullWidth" sx={{ width: 600 }} />
          <TextField label="Email" id="fullWidth" sx={{ width: 600 }} />
          <TextField label="Message" id="fullWidth" sx={{ width: 600 }} />
        </Stack>
      </Grid>
      <Grid container justifyContent={"center"} sx={{pt:2}}>
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
