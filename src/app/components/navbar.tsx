import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ background: "white", height: 80 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: { xs: "16px", md: "0 24px" },
          }}
        >
          <Stack direction={"column"}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: { xs: 20, md: 27 },
                color: "#0E204E",
                width: { xs: "auto", md: "250px" },
                fontFamily: "Playfair Display",
                fontWeight: "Bold",
              }}
            >
              Pineapple
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                position: "absolute",
                color: "#0E204E",
                paddingTop: { xs: 2, md: 3.5 },
                fontSize: { xs: 20, md: 27 },
                fontFamily: "Playfair Display",
                fontWeight: 600,
              }}
            >
              Island
            </Typography>
          </Stack>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              gap: 2,
              flexGrow: 1,
              padding: "0 24px",
            }}
          >
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontWeight: 400,
              }}
            >
              About Us
            </Button>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontWeight: 400,
              }}
            >
              What we do
            </Button>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontWeight: 400,
              }}
            >
              Project
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <MenuIcon sx={{ color: "#0d204e" }} />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
                minWidth: { xs: "auto", md: "250px" },
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{ background: "#0E204E", borderRadius: 0 }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: 14, md: 15 },
                    fontWeight: 100,
                    textTransform: "none",
                  }}
                >
                  Get in touch
                </Typography>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      >
        <List sx={{ width: "10rem" }}>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontWeight: 400,
              }}
            >
              About Us
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontWeight: 400,
              }}
            >
              What we do
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontWeight: 400,
              }}
            >
              Project
            </ListItemButton>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#0E204E", borderRadius: 0 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 14, md: 15 },
                  fontWeight: 100,
                  textTransform: "none",
                }}
              >
                Get in touch
              </Typography>
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
