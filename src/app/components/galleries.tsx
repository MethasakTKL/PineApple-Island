import { Box, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Galleries() {
  return (
    <Box>
      <Box sx={{ pt: 5, pb: 10 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontFamily: "Playfair Display",fontSize:48,fontWeight:'bold',color:'#0d204e' }}
        >
          Galleries
        </Typography>
        <Typography sx={{ textAlign: "center", pt: 1 }}>
          a community that gives you a taste of happiness, a place you’ll love
          to live and
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          an opportunity to build a home.
        </Typography>
        <Grid container justifyContent={"center"}>
          <Stack direction={"column"} spacing={1} paddingTop={3}>
            <TextField label="Name" id="fullWidth" sx={{ width: 600 }} />
            <TextField label="Phone No" id="fullWidth" sx={{ width: 600 }} />
            <TextField label="Email" id="fullWidth" sx={{ width: 600 }} />
            <TextField label="Message" id="fullWidth" sx={{ width: 600 }} />
          </Stack>
        </Grid>
      </Box>
    </Box>
  );
}
