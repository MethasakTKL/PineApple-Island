import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";


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

export default function Galleries() {
  return (
    <Box>
      <Box sx={{ pt: 5, pb: 5 }}>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          margin={10}
          marginTop={5}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Grid size={12}>
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
            <Typography
              sx={{ textAlign: "center", pt: 2, pb: 2, fontFamily: "Manrope" }}
            >
              a community that gives you a taste of happiness, a place you’ll
              love to live and
              <br /> an opportunity to build a home.
            </Typography>
          </Grid>
          {itemData.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <img
                  src={item.img}
                  width="100%"
                  height="400"
                  className="box1"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          rowSpacing={0.5}
          columnSpacing={{ xs: 1, sm: 2, md: 4 }}
          margin={0.5}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <Grid size={12}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontFamily: "Playfair Display",
                fontSize: 40,
                fontWeight: "bold",
                color: "#0d204e",
              }}
            >
              Available Homes
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                pt: "1rem",
                pb: "1rem",
                pl: "3rem",
                pr: "3rem",
                fontFamily: "lato",
                fontWeight: "300",
              }}
            >
              a community that gives you a taste of happiness, a place you’ll
              love to live and an opportunity to build a home.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box width={"100%"}>
              <img
                src="/galleries_sx/galleries_sx1.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx2.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx3.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx4.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Grid>
              <Box>
                <img
                  src="/galleries_sx/galleries_sx5.jpeg"
                  width="100%"
                  height="170"
                  className="box1"
                />
              </Box>
            </Grid>
            <Grid>
              <Box pt={0.5}>
                <img
                  src="/galleries_sx/galleries_sx7.jpeg"
                  width="100%"
                  height="170"
                  className="box1"
                />
              </Box>
            </Grid>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx6.jpeg"
                width="100%"
                height="348"
                className="box1"
              />
            </Box>
          </Grid>{" "}
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx8.jpeg"
                width="100%"
                height="348"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx9.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
            <Box pt={0.5}>
              <img
                src="/galleries_sx/galleries_sx10.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx11.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx12.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box>
              <img
                src="/galleries_sx/galleries_sx13.jpeg"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
