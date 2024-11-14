import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import VillaIcon from "@mui/icons-material/Villa";
import RoofingIcon from "@mui/icons-material/Roofing";
import BusinessIcon from "@mui/icons-material/Business";
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
        sx={{ background: "white", height: "auto", maxHeight: "100px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: { md: "1rem", lg: "2rem" },
            marginRight: { md: "1rem", lg: "2rem" },
          }}
        >
          <Box
            sx={{
              justifyContent: "flex-start",
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "18pt",
                color: "#0E204E",
                width: { xs: "auto", md: "250px" },
                fontFamily: "Playfair Display",
                fontWeight: "Bold",
                lineHeight: "1",
              }}
            >
              Pineapple <br />
              Island
            </Typography>
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
                fontSize: "13pt",
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
                fontSize: "13pt",
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
                fontSize: "13pt",
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
                  xs: "flex",
                  md: "none",
                },
              }}
            >
              <MenuIcon sx={{ color: "#0d204e", fontSize: "20pt" }} />
            </IconButton>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                justifyContent: "flex-end",
                minWidth: "auto",
              }}
            >
              <Button
                variant="contained"
                disableElevation
                sx={{ background: "#0E204E", borderRadius: 0, width: "10rem" }}
              >
                <Typography
                  sx={{
                    fontSize: "13pt",
                    fontWeight: 100,
                    textTransform: "none",
                  }}
                >
                  Get in Touch
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
        <Box
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 2,
            width: 250,
            height: 80,
            background: "#0E204E",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: "18pt",
              color: "white",
              width: { xs: "auto", md: "250px" },
              fontFamily: "Playfair Display",
              fontWeight: "300",
              lineHeight: "1",
              pl: 2,
              pt: 2,
            }}
          >
            Pineapple <br />
            Island
          </Typography>
        </Box>
        <List sx={{ width: "auto" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BusinessIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RoofingIcon />
              </ListItemIcon>
              <ListItemText primary="What we do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VillaIcon />
              </ListItemIcon>
              <ListItemText primary="Project" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
