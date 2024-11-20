import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const itemData = [
  { id: "1", img: "/galleries/galleries_1.jpeg", alt: "Gallery image 1" },
  { id: "2", img: "/galleries/galleries_2.jpeg", alt: "Gallery image 2" },
  { id: "3", img: "/galleries/galleries_3.jpeg", alt: "Gallery image 3" },
  { id: "4", img: "/galleries/galleries_4.jpeg", alt: "Gallery image 4" },
  { id: "5", img: "/galleries/galleries_5.jpeg", alt: "Gallery image 5" },
  { id: "6", img: "/galleries/galleries_6.jpeg", alt: "Gallery image 6" },
  { id: "7", img: "/galleries/galleries_7.jpeg", alt: "Gallery image 7" },
  { id: "8", img: "/galleries/galleries_8.jpeg", alt: "Gallery image 8" },
  { id: "9", img: "/galleries/galleries_9.jpeg", alt: "Gallery image 9" },
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
          {itemData.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box>
                <img
                  src={item.img}
                  alt={item.alt}
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
                alt="Gallery image 1"
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
                alt="Gallery image 2"
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
                alt="Gallery image 3"
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
                alt="Gallery image 4"
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
                  alt="Gallery image 5"
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
                  alt="Gallery image 7"
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
                alt="Gallery image 6"
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
                alt= "Gallery image 8"
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
                alt= "Gallery image 9"
                width="100%"
                height="170"
                className="box1"
              />
            </Box>
            <Box pt={0.5}>
              <img
                src="/galleries_sx/galleries_sx10.jpeg"
                alt= "Gallery image 10"
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
                alt= "Gallery image 11"
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
                alt= "Gallery image 12"
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
                alt= "Gallery image 13"
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
