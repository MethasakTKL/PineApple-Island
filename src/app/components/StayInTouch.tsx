import styled from "@emotion/styled";
import {
  Box,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { useState } from "react";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#2d2b2b",
  },
  "& label.Mui-focused": {
    color: "#2d2b2b",
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
const MessageTextField = styled(TextField)({
  "& label": {
    color: "#2d2b2b",
  },
  "& label.Mui-focused": {
    color: "#2d2b2b",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#b3bac2",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#949494",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#b3bac2",
      borderRadius: 0,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#b3bac2",
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
            fontSize: "15pt",
            fontWeight: 300,
            pt: 3,
            display: { xs: "block", md: "none" },
            pl: "1rem",
            pr: "1rem",
            color: "#424242",
          }}
        >
          If you are interested in finding out more about The Discovery Village,
          leave a message
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: { xs: "1rem", md: "2.5rem" },
            mr: { xs: "3rem", md: "4rem" },
            ml: { xs: "3rem", md: "4rem" },
          }}
        >
          <CssTextField
            id="name"
            label={
              <Typography
                sx={{
                  fontSize: "13pt",
                  fontFamily: isMd ? "Manrope" : "Lato",
                  fontWeight: isMd ? 400 : 300,
                  color: isMd ? "black" : "#666666",
                }}
              >
                Name
              </Typography>
            }
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
            pt: { xs: "1rem", md: "2.5rem" },
            mr: { xs: "3rem", md: "4rem" },
            ml: { xs: "3rem", md: "4rem" },
          }}
        >
          <CssTextField
            id="phoneno"
            name="phoneNo"
            label={
              <Typography
                sx={{
                  fontSize: "13pt",
                  fontFamily: isMd ? "Manrope" : "Lato",
                  fontWeight: isMd ? 400 : 300,
                  color: isMd ? "black" : "#666666",
                }}
              >
                Phone No
              </Typography>
            }
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
            pt: { xs: "1rem", md: "2.5rem" },
            mr: { xs: "3rem", md: "4rem" },
            ml: { xs: "3rem", md: "4rem" },
          }}
        >
          <CssTextField
            id="email"
            name="email"
            label={
              <Typography
                sx={{
                  fontSize: "13pt",
                  fontFamily: isMd ? "Manrope" : "Lato",
                  fontWeight: isMd ? 400 : 300,
                  color: isMd ? "black" : "#666666",
                }}
              >
                Email
              </Typography>
            }
            value={formData.email}
            variant={isMd ? "outlined" : "standard"}
            sx={{ width: "40rem" }}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            pt: { xs: "1rem", md: "2.5rem" },
            mr: "4rem",
            ml: "4rem",
          }}
        >
          <CssTextField
            id="message"
            name="message"
            label={
              <Typography
                sx={{
                  fontFamily: isMd ? "Manrope" : "Lato",
                  fontWeight: isMd ? 400 : 300,
                  color: isMd ? "black" : "#666666",
                }}
              >
                Message
              </Typography>
            }
            value={formData.message}
            multiline
            rows={6}
            variant="outlined"
            sx={{
              width: "40rem",
            }}
            onChange={handleInputChange}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            pt: { xs: "1rem", md: "2.5rem" },
            mr: { xs: "3rem", md: "4rem" },
            ml: { xs: "3rem", md: "4rem" },
          }}
        >
          <Stack
            sx={{
              width: "40rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "13pt",
                fontFamily: "Lato",
                fontWeight: 300,
                color: "#666666",
                pb: 1,
                mt: "1rem",
              }}
            >
              Message
            </Typography>
            <MessageTextField
              id="message"
              name="message"
              label=""
              value={formData.message}
              multiline
              rows={4}
              variant="outlined"
              sx={{
                width: "100%",
              }}
              onChange={handleInputChange}
            />
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: "1.5rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "white",
              background: "#121f4b",
              width: "6.5rem",
              height: "3.25rem",
            }}
            onClick={handleSent}
          >
            <Typography sx={{ fontSize: "15pt", textTransform: "none" }}>
              Send
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
