import { Box, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Offer() {
  return (
    <Box>
      <Box sx={{ pt: 5, pb: 10 }}>
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

        <Grid container justifyContent={"center"} pt={10} sx={{justifyContent:'flex-start'}}>
          <Box
            component="img"
            src="/galleries/galleries_2.jpeg"
            sx={{ background: "#0d204e", width: 350, height: 350 }}
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
}
