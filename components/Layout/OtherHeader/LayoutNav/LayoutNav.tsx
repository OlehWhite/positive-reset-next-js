import { Container, Wrapper, WrapperSidebar, WrapperMenu } from "./styled";
import { FC } from "react";
import { Box } from "@mui/material";
import { MUIAccordion } from "../../../MUIAccordion/MUIAccordion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Services } from "../../../Services/Services";
import { Sidebar } from "../../../../otherPages/home/Sidebar/Sidebar";
import { BASE_NAV } from "../../constants";
import { ShowBlock } from "../../styled";

export const LayoutNav: FC = () => {
  const router = useRouter();

  const handleNavClick = (link: string) => {
    router.push(link);
  };

  return (
    <Container>
      <Wrapper>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <WrapperMenu>
            <MUIAccordion />
          </WrapperMenu>

          <ShowBlock>
            {BASE_NAV.map((link, index) => (
              <Box sx={{ display: "inline-block" }} key={index}>
                {link.name === "SERVICES" ? (
                  <Services color={"#555"} />
                ) : (
                  <Link
                    key={index}
                    href={link.path}
                    passHref
                    onClick={() => handleNavClick(link.path)}
                    id="link"
                  >
                    {link.name}
                  </Link>
                )}
              </Box>
            ))}
          </ShowBlock>
        </Box>

        <WrapperSidebar>
          <Sidebar />
        </WrapperSidebar>
      </Wrapper>
    </Container>
  );
};
