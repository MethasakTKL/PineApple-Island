import { CheckBox } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function FeatureAgent() {
  return (
    <Box>
      <Box
        sx={{
          pb: "10rem",
          display: { xs: "none", md: "block", lg: "block" },
        }}
      >
        <Grid
          container
          spacing={1}
          pt={10}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid
            size={{ md: 5, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              position="absolute"
              src="/asset_6.jpeg"
              sx={{
                background: "#0d204e",
                width: 370,
                height: 550,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 350,
                pl: "20rem",
              }}
            />
          </Grid>
          <Grid container size={{ md: 5, lg: 4 }}>
            <Grid
              size={12}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                justifyItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "38pt",
                  fontFamily: "Playfair Display",
                  fontWeight: 600,
                  pb: "1.5rem",
                  color: "#0d204e",
                  lineHeight: "4rem",
                }}
              >
                Amazing Features
              </Typography>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>{" "}
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>{" "}
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>{" "}
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      fontSize: "11pt",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          pt={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "10rem",
          }}
        >
          <Grid container size={{ md: 5, lg: 4 }}>
            <Grid
              size={12}
              sx={{
                textAlign: "flex-start",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                align="left"
                sx={{
                  fontSize: "38pt",
                  fontFamily: "Playfair Display",
                  fontWeight: 600,

                  color: "#0d204e",
                  lineHeight: "3rem",
                  pl: "5rem",
                  pb: "1.5rem",
                }}
              >
                Become <br />
                an Agent
              </Typography>
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  pb: "1.5rem",
                  color: "#0d204e",
                  pl: "5rem",
                  pr: "10rem",
                }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  background: "#0E204E",
                  borderRadius: 0,
                  width: "10rem",
                  ml: "5rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13pt",
                    fontWeight: 100,
                    textTransform: "none",
                  }}
                >
                  Join Now
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid
            size={{ md: 5, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              position="absolute"
              src="/asset_7.jpeg"
              sx={{
                background: "#0d204e",
                width: 370,
                height: 550,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 350,
                pl: "20rem",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* //-------------------------------------------------------------------------- */}
      <Box
        sx={{
          background: "#0d204e",
          display: { sm: "flex", md: "none", lg: "none" },
          justifyContent: "center",
          alignItems: "center",
          pb: "2rem",
        }}
      >
        <Grid container spacing={2} sx={{ pt: "2.5rem", textAlign: "center" }}>
          <Grid size={12}>
            <Typography
              sx={{
                color: "white",
                fontSize: "22pt",
                fontWeight: 300,
                fontFamily: "Playfair Display",
                pb: "1rem",
              }}
            >
              Become an Agent
            </Typography>
            <Grid
              size={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Box
                sx={{ width: "100%", marginLeft: "2rem", marginRight: "2rem" }}
              >
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "13pt",
                    fontWeight: 200,
                    fontFamily: "Lato",
                    marginLeft: "3rem",
                    marginRight: "3rem",
                  }}
                >
                  A community that gives you a taste of happiness, a place
                  you’ll love to live and an opportunity to build a home.
                </Typography>
              </Box>
            </Grid>
            <Grid size={12}>
              <Button
                variant="contained"
                sx={{ background: "white", mt: "1rem", mb: "1rem" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Lato",
                    color: "#0d204e",
                    textTransform: "none",
                  }}
                >
                  Join Now
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
