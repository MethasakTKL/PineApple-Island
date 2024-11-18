import styled from "@emotion/styled";
import {
  Box,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

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
      borderRadius: 0,
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
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSent = () => {
    const formData = {
      name: name,
      phoneNo: phoneNo,
      email: email,
      message: message,
    };
    console.log(formData);
  };

  return (
    <Box>
      <Box>
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
            display: { xs: "none", md: "block" },
          }}
        >
          Are you curious about Pineapple Island? Send a message
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Manrope",
            pt: 3,
            display: { xs: "block", md: "none" },
          }}
        >
          If you are interested in finding out more about The Discovery Village,
          leave a message
        </Typography>
        <Box
          sx={{
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
            value={name}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={(e) => setName(e.target.value)}
          />
        </Box>
        <Box
          sx={{
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
            value={phoneNo}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </Box>
        <Box
          sx={{
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
            value={email}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box
          sx={{
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
            value={message}
            multiline
            rows={6}
            variant={isMd ? "outlined" : "standard"}
            sx={{
              width: "40rem",
            }}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Box>
        <Box
          sx={{
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
            onClick={handleSent}
          >
            send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
