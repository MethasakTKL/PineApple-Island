import styled from "@emotion/styled";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});
export default function StayInTouch() {
  return (
    <Box>
      <Box
        sx={{
          pt: 5,
          pb: 10,
          display: { xs: "none", sm: "block", md: "block" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            fontSize: { xs: 36, md: 48 },
            fontWeight: "bold",
            color: "#0d204e",
          }}
        >
          Stay In Touch
        </Typography>
        <Typography sx={{ textAlign: "center", fontFamily: "Manrope", pt: 3 }}>
          Are you curious about Pineapple Island? Send a message
        </Typography>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "2rem",
            ml: "2rem",
          }}
        >
          <CssTextField
            id="name"
            label="Name"
            variant="outlined"
            sx={{ width: "40rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "2rem",
            ml: "2rem",
          }}
        >
          <CssTextField
            id="phoneno"
            label="Phone No"
            variant="outlined"
            sx={{ width: "40rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "2rem",
            ml: "2rem",
          }}
        >
          <CssTextField
            id="email"
            label="Email"
            variant="outlined"
            sx={{ width: "40rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "2rem",
            ml: "2rem",
          }}
        >
          <CssTextField
            id="Message"
            label="Message"
            variant="outlined"
            sx={{ width: "40rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              background: "#121f4b",
              width: "8rem",
              borderRadius: 0,
            }}
          >
            send
          </Button>
        </Box>
      </Box>
      {/* -------------------------------------------------------------------------------------- */}
      <Box
        sx={{ pt: 5, pb: 10, display: { xs: "block", sm: "none", md: "none" } }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontFamily: "Playfair Display",
            fontSize: { xs: 36, md: 48 },
            fontWeight: "bold",
            color: "#0d204e",
          }}
        >
          Stay In Touch
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Manrope",
            pt: 3,
            mr: "2rem",
            ml: "2rem",
          }}
        >
          If you are interested in finding out more about The Discovery Village,
          leave a message
        </Typography>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
          }}
        >
          <CssTextField
            id="name"
            label="Name"
            variant="standard"
            sx={{ width: "20rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
          }}
        >
          <CssTextField
            id="phoneno"
            label="Phone No"
            variant="standard"
            sx={{ width: "20rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
          }}
        >
          <CssTextField
            id="email"
            label="Email"
            variant="standard"
            sx={{ width: "20rem" }}
          />
        </Box>

        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
          }}
        >
          <CssTextField
          type="text"
            id="message"
            label="Message"
            variant="standard"
            sx={{ width: "20rem" }}
          />
        </Box>
        <Box
          sx={{
            //background: "yellow",
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              background: "#121f4b",
              width: "8rem",
              borderRadius: 0,
            }}
          >
            send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
