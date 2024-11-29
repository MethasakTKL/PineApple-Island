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
  "& label": {
    color: "black",
  },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#2d2b2b",
      borderWidth: "1.25px",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
      borderWidth: "1.25px",
      borderRadius: 0,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
      borderWidth: "1.25px",
      borderRadius: 0,
    },
  },
});

export default function StayInTouch() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleSent = () => {
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
            fontFamily: "Lato",
            fontSize:"15pt",
            fontWeight:300,
            pt: 3,
            display: { xs: "block", md: "none" },
            pl: "2rem",
            pr: "2rem",
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
            mr: "4rem",
            ml: "4rem",
          }}
        >
          <CssTextField
            id="name"
            label="Name"
            name="name"
            value={formData.name}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "4rem",
            ml: "4rem",
          }}
        >
          <CssTextField
            id="phoneno"
            name="phoneNo"
            label="Phone No"
            value={formData.phoneNo}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "4rem",
            ml: "4rem",
          }}
        >
          <CssTextField
            id="email"
            name="email"
            label="Email"
            value={formData.email}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "2rem",
            mr: "4rem",
            ml: "4rem",
          }}
        >
          <CssTextField
            id="message"
            name="message"
            label="Message"
            value={formData.message}
            multiline
            rows={6}
            variant={isMd ? "outlined" : "standard"}
            sx={{
              width: "40rem",
            }}
            onChange={handleInputChange}
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
              width: "6.5rem",
              height:"3.25rem"
            }}
            onClick={handleSent}
          >
            <Typography sx={{fontSize:"15pt",textTransform:"none"}}>
              Send
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
