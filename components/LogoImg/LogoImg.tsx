import IMGLogoFooter from "../../public/logo.png";
import Link from "next/link";
import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";

const LogoImg = () => {
  return (
    <Link href="/" id="logo">
      <Box sx={{ display: "flex" }}>
        <Box>
          <Image src={IMGLogoFooter} width="75" alt="Logo" title="Logo" />
        </Box>
        <Box>
          <Box sx={{ color: "#fff", fontWeight: "600", fontSize: 27 }}>
            POSITIVE RESET
          </Box>
          <Box
            sx={{
              color: "rgba(57,138,243,0.98)",
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

export default LogoImg;
