import { CheckBox } from "@mui/icons-material";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function Feature() {
  return (
    <Box>
      <Box
        sx={{
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
              alt="dinner-table"
              sx={{
                background: "white",
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
      </Box>
    </Box>
  );
}
