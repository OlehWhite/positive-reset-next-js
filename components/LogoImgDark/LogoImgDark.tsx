import Link from "next/link";
import { Box } from "@mui/material";
import { IMGLogo } from "../Layout/Footer/styled";
import IMGLogoFooter from "../../public/logo.png";
import React from "react";
import Image from "next/image";

const LogoImgDark = () => {
  return (
    <Link href="/" id="logo">
      <Box sx={{ display: "flex" }}>
        <Box>
          <Image src={IMGLogoFooter} width={75} alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box
            sx={{
              color: "rgba(53,180,248,0.98)",
              fontWeight: "600",
              fontSize: 28,
            }}
          >
            POSITIVE RESET
          </Box>
          <Box
            sx={{
              color: "#7d7d7d",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Mental Health Clinic
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default LogoImgDark;
