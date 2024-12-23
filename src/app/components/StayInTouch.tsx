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
            fontFamily: "Manrope",
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
            mr: "2rem",
            ml: "2rem",
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
            mr: "2rem",
            ml: "2rem",
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
            mr: "2rem",
            ml: "2rem",
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
            mr: "2rem",
            ml: "2rem",
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
