
import { Box,Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Offer() {
  return (
    <Box>
      <Box
        sx={{
          pt: "10rem",
          pb: 10,
          display: { xs: "none", md: "none", lg: "block" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            fontSize: "45pt",
            fontWeight: "bold",
            color: "#0d204e",
          }}
        >
          What Pineapple Land Offers
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", pt: "10rem", pb: "5rem" }}
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
              src="/asset_4.jpeg"
              sx={{
                background: "#0d204e",
                width: 400,
                height: 400,
                marginLeft: 0,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 250,
                marginLeft: "15rem",
              }}
            />
          </Grid>
          <Grid
            container
            size={{ md: 5, lg: 4 }}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Grid size={4} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="/icon_offer/fluent_tree-evergreen-20-regular.svg"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  pb: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Eco Friendly
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <Box
                component="img"
                src="/icon_offer/ooui_network.svg"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  pb: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Smart Homes
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <Box
                component="img"
                src="/icon_offer/ic_outline-payments.svg"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  pb: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Good Rates
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={10} sx={{ justifyContent: "center" }}>
          <Grid
            container
            size={{ md: 5, lg: 4 }}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Grid size={4} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="/icon_offer/icons8_services.svg"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  pb: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Serviced Apartment
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <Box
                component="img"
                src="/icon_offer/bytesize_lock.svg"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  pb: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Private Security
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <Box
                component="img"
                src="/icon_offer/emojione-monotone_light-bulb.svg"
                sx={{
                  width: "4rem",
                  height: "4rem",
                  pb: "0.5rem",
                }}
              />
              <Typography
                sx={{
                  fontSize: "12pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                24/7 Electricity
              </Typography>
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
              src="/asset_5.jpeg"
              sx={{
                background: "#0d204e",
                width: 400,
                height: 400,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 250,
                marginRight: "15rem",
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* //------------------------------------------------------------ */}
      <Box
        sx={{
          pt: "5rem",
          pb: "40rem",
          display: { sm: "block", md: "block", lg: "none" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            fontSize: "25pt",
            fontWeight: "bold",
            color: "#0d204e",
            pb: "2rem",
          }}
        >
          Pineapple Land Offers
        </Typography>
        <Grid
          container
          sx={{ justifyItems: "center", justifyContent: "center" }}
        >
          <Box
            position="absolute"
            sx={{
              background: "#0d204e",
              width: "90%",
              height: 470,
              marginLeft: 0,
            }}
          >
            <img
              src="/asset_4.jpeg"
              width="100%"
              height="470"
              className="box2"
            />
          </Box>
          <Box
            position="absolute"
            sx={{
              width: "auto",
              minWidth: { xs: "20rem", sm: "30rem" },
              height: "17rem",
              background: "#0d204e",
              marginTop: "25rem",
              mr: "4rem",
              ml: "4rem",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "center", margin: "1rem", pt: "1rem" }}
            >
              <Grid container size={12}>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="/icon_offer_sx/fluent_tree-evergreen-20-regular.svg"
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      pb: "0.5rem",
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    Eco Friendly
                  </Typography>
                </Grid>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="/icon_offer_sx/ooui_network.svg"
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      pb: "0.5rem",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    Smart Homes
                  </Typography>
                </Grid>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="/icon_offer_sx/ic_outline-payments.svg"
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      pb: "0.5rem",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    Good Rates
                  </Typography>
                </Grid>
              </Grid>
              <Grid container size={12}>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="/icon_offer_sx/icons8_services.svg"
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      pb: "0.5rem",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    Serviced Apartment
                  </Typography>
                </Grid>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="/icon_offer_sx/bytesize_lock.svg"
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      pb: "0.5rem",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    Private Security
                  </Typography>
                </Grid>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <Box
                    component="img"
                    src="/icon_offer_sx/emojione-monotone_light-bulb.svg"
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      pb: "0.5rem",
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: "10pt",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      color: "white",
                    }}
                  >
                    24/7 Electricity
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
