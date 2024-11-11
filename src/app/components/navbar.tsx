import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
export default function NavBar() {
  return (
    <Box>
      <AppBar position="fixed" elevation={0} sx={{ background: "white",height:80 }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack direction={"column"}>
            <Typography
              variant="h6"
              component="div"
              className="logo"
              sx={{
                fontSize: 27,
                color: "#0E204E",
                width: "250px",
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
                paddingTop: 3.5,
                fontSize: 27,
                fontFamily: "Playfair Display",
                fontWeight: 600,
              }}
            >
              Island
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexGrow: 1,
            }}
          >
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
              }}
            >
              About Us
            </Button>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
              }}
            >
              What we do
            </Button>
            <Button
              sx={{
                color: "black",
                textTransform: "none",
                fontFamily: "Manrope",
              }}
            >
              Project
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: "250px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              disableElevation
              sx={{ background: "#0E204E", borderRadius: 0 }}
            >
              <Typography
                sx={{ fontSize: 15, fontWeight: 100, textTransform: "none" }}
              >
                Get in touch
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
