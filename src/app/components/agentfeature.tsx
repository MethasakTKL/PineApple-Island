import {
  CheckBox,
  EmojiObjectsOutlined,
  HttpsOutlined,
  ParkOutlined,
  PaymentsOutlined,
  SettingsSuggestOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
export default function AgentFeature() {
  return (
    <Box>
      <Box
        sx={{
          pb: "20rem",
          display: { xs: "none", md: "block", lg: "block" },
        }}
      >
        <Grid
          container
          spacing={2}
          pt={10}
          sx={{ justifyContent: "center", pl: "10rem" }}
        >
          <Grid size={6}>
            <Box
              component="img"
              position="absolute"
              src="/asset_6.jpeg"
              sx={{
                background: "#0d204e",
                width: 400,
                height: 550,
                marginLeft: 0,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 350,
                marginLeft: 30,
                marginTop: 10,
              }}
            />
          </Grid>
          <Grid container size={6}>
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
                  maxWidth: 500,
                }}
              >
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>{" "}
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>{" "}
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>{" "}
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "#cfd9d6", height: 30 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
                <ListItem
                  secondaryAction={<CheckBox sx={{ color: "#0d204e" }} />}
                  sx={{ bgcolor: "white", height: 50 }}
                >
                  <Typography sx={{ fontFamily: "Poppins", fontWeight: 300 }}>
                    Lorem ipsum dolor sit amet, consectetur
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} pt={15}>
          <Grid container size={6} sx={{ pr: "0rem", pt: "5rem" }}>
            <Grid size={12} sx={{ textAlign: "flex-start", pl: "15rem" }}>
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
                Become an
                <br />
                Agent
              </Typography>
              <Typography
                sx={{
                  fontSize: "15pt",
                  fontFamily: "Manrope",
                  fontWeight: 400,
                  width: "55%",
                  pb: "1.5rem",
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
                  width: "12rem",
                  height: "4rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 15 },
                    fontWeight: 100,
                    textTransform: "none",
                  }}
                >
                  Join Now
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid size={6}>
            <Box
              component="img"
              position="absolute"
              src="/asset_7.jpeg"
              sx={{
                background: "#0d204e",
                width: 400,
                height: 550,
                marginLeft: 20,
              }}
            />
            <Box
              sx={{
                background: "#0d204e",
                width: 350,
                height: 350,
                marginLeft: 0,
                marginTop: 10,
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          background: "#0d204e",
          pt: "5rem",
          pb: "5rem",
          display: { sm: "block", md: "none", lg: "none" },
        }}
      >
        <Grid container spacing={2} sx={{ pt: "2.5rem", textAlign: "center" }}>
          <Grid>
            <Typography
              sx={{
                color: "white",
                fontSize: "22pt",
                fontWeight: 300,
                fontFamily: "Playfair Display",
              }}
            >
              Become an Agent
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: "12pt",
                fontWeight: 300,
                fontFamily: "Lato",
                marginLeft: "3rem",
                marginRight: "3rem",
              }}
            >
              A community that gives you a taste of happiness, a place you’ll
              love to live and an opportunity to build a home.
            </Typography>
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
      </Box>
    </Box>
  );
}
