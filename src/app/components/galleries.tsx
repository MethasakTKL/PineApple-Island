import {
  Box,
  ImageList,
  ImageListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function Galleries() {
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
          Galleries
        </Typography>
        <Typography sx={{ textAlign: "center", pt: 1 }}>
          a community that gives you a taste of happiness, a place you’ll love
          to live and
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          an opportunity to build a home.
        </Typography>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          margin={10}
          marginTop={5}
        >
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_1.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_2.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_3.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_4.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_5.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_6.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_7.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>

          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_8.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
          <Grid size={{xs: 12, sm: 6, md: 4}}>
            <Box
              component="img"
              src="/galleries/galleries_9.jpeg"
              sx={{ background: "#0d204e", width: "100%", height: 400 }}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
const itemData = [
  {
    img: "/galleries/galleries_1.jpeg",
  },
  {
    img: "/galleries/galleries_2.jpeg",
  },
  {
    img: "/galleries/galleries_3.jpeg",
  },
  {
    img: "/galleries/galleries_4.jpeg",
  },
  {
    img: "/galleries/galleries_5.jpeg",
  },
  {
    img: "/galleries/galleries_6.jpeg",
  },
  {
    img: "/galleries/galleries_7.jpeg",
  },
  {
    img: "/galleries/galleries_8.jpeg",
  },
  {
    img: "/galleries/galleries_9.jpeg",
  },
];
