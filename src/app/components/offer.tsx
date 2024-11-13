import {
  EmojiObjectsOutlined,
  HttpsOutlined,
  ParkOutlined,
  PaymentsOutlined,
  SettingsSuggestOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import { Box, Icon, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Ecofriendly from  "../../../public/icon_offer/fluent_tree-evergreen-20-regular.svg";

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
            fontSize: 48,
            fontWeight: "bold",
            color: "#0d204e",
          }}
        >
          What Pineapple Land Offers
        </Typography>

        <Grid
          container
          spacing={2}
          pt={10}
          sx={{ justifyContent: "flex-start", pl: 10 }}
        >
          <Grid size={6} sx={{ pr: "15rem" }}>
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
                marginLeft: 30,
                marginTop: 10,
              }}
            />
          </Grid>
          <Grid container size={6} sx={{ pl: "5rem", pt: "8rem" }}>
            <Grid size={4} sx={{ textAlign: "center" }}>
              <ParkOutlined
                sx={{
                  fontSize: "5rem",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  pb: "1.5rem",
                  color: "#0d204e",
                }}
              />
              <Typography
                sx={{
                  fontSize: "13pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Eco Friendly
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <WifiOutlined
                sx={{
                  fontSize: "5rem",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  pb: "1.5rem",
                  color: "#0d204e",
                }}
              />
              <Typography
                sx={{
                  fontSize: "15pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Smart Homes
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <PaymentsOutlined
                sx={{
                  fontSize: "5rem",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  pb: "1.5rem",
                  color: "#0d204e",
                }}
              />
              <Typography
                sx={{
                  fontSize: "15pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Good Rates
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          pt={10}
          sx={{ justifyContent: "flex-start", pl: 10 }}
        >
          <Grid container size={6} sx={{ pr: "5rem", pt: "8rem" }}>
            <Grid size={4} sx={{ textAlign: "center" }}>
              <SettingsSuggestOutlined
                sx={{
                  fontSize: "5rem",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  pb: "1.5rem",
                  color: "#0d204e",
                }}
              />
              <Typography
                sx={{
                  fontSize: "13pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Serviced Apartment
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <HttpsOutlined
                sx={{
                  fontSize: "5rem",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  pb: "1.5rem",
                  color: "#0d204e",
                }}
              />
              <Typography
                sx={{
                  fontSize: "15pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                Private Security
              </Typography>
            </Grid>
            <Grid size={4} sx={{ pl: "1rem", textAlign: "center" }}>
              <EmojiObjectsOutlined
                sx={{
                  fontSize: "5rem",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                  pb: "1.5rem",
                  color: "#0d204e",
                }}
              />
              <Typography
                sx={{
                  fontSize: "15pt",
                  fontFamily: "Poppins",
                  fontWeight: 300,
                }}
              >
                24/7 Electricity
              </Typography>
            </Grid>
          </Grid>
          <Grid size={6} sx={{ pr: "15rem" }}>
            <Box
              component="img"
              position="absolute"
              src="/asset_5.jpeg"
              sx={{
                background: "#0d204e",
                width: 400,
                height: 400,
                marginLeft: 30,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 250,
                marginLeft: 8,
                marginTop: 10,
              }}
            />
          </Grid>
        </Grid>
      </Box>
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
            fontSize: 30,
            fontWeight: "bold",
            color: "#0d204e",
            pb: "2rem",
          }}
        >
          What Pineapple Land Offers
        </Typography>
        <Grid
          container
          sx={{ justifyItems: "center", justifyContent: "center" }}
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
            position="absolute"
            sx={{
              width: "20rem",
              height: "17rem",
              background: "#0d204e",
              marginTop: "20rem",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: "center", margin: "1rem",pt:"1rem"}}
            >
              <Grid container size={12}>
                <Grid size={4} sx={{ textAlign: "center" }}>
                  <ParkOutlined
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      pb: "0.5rem",
                      color: "white",
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
                  <WifiOutlined
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      pb: "0.5rem",
                      color: "white",
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
                  <PaymentsOutlined
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      pb: "0.5rem",
                      color: "white",
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
                  <SettingsSuggestOutlined
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      pb: "0.5rem",
                      color: "white",
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
                  <HttpsOutlined
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      pb: "0.5rem",
                      color: "white",
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
                  <EmojiObjectsOutlined
                    sx={{
                      fontSize: "2.5rem",
                      fontFamily: "Poppins",
                      fontWeight: 300,
                      pb: "0.5rem",
                      color: "white",
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
