import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useScreenSize } from "../screenSizeContext";

type LinkItem = {
  label: string;
  href: string;
  menuItems?: { label: string; href: string }[];
};

export default function CustomHeader2(): JSX.Element {
  const theme = useTheme();
  const { isMobile } = useScreenSize();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleToggleMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseMenu = () => {
    setOpenDrawer(false);
  };

  const links: LinkItem[] = [
    { label: "Startsidan", href: "/" },
    { label: "Om oss", href: "/om-oss" },
    {
      label: "Tjänster",
      href: "/tjanster",
      menuItems: [
        { label: "Byggstäd", href: "/byggstad" },
        { label: "Hemstäd", href: "/hemstad" },
        { label: "Flyttstäd", href: "/flyttstad" },
        { label: "Fönsterputs", href: "/fonsterputs" },
        { label: "Företagsstäd", href: "/foretagsstad" },
        { label: "Trappstäd", href: "/trappstad" },
      ],
    },
    { label: "Kontakt", href: "/contact" },
    { label: "Offert", href: "/offert" },
  ];

  return (
    <Box
      sx={{
        paddingY: 0.1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexDirection: isMobile ? "row" : "row",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginLeft: 2,
          height: 75,
          position: "relative",
        }}
      >
        <Link
          to="/"
          style={{ marginBottom: 1, marginTop: 1, position: "relative" }}
        >
          <img
            src="https://i.imgur.com/Zcgk1vf.png"
            alt="Logo saying dailyvibe"
            style={{
              width: "180px",
              objectFit: "contain",
              position: "absolute",
              top: "35px",
              left: 0,
              zIndex: 999,
              transform: "translateY(-50%)",
            }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: 2,
          padding: 2,
        }}
      >
        <IconButton onClick={handleToggleMenu}>
          <MenuIcon sx={{ color: "black", fontSize: 40 }} />
        </IconButton>

        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleCloseMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 220,
              backgroundColor: theme.palette.background.paper,
            },
          }}
        >
          <List
            sx={{
              paddingLeft: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#dbbed1",
              height: "100%",
            }}
          >
            {links.map((link, index) => (
              <Slide
                key={link.label}
                direction="right"
                in={openDrawer}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ListItem
                  disablePadding
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    transition: "background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#f3f3f3",
                    },
                    marginBottom: 2,
                  }}
                >
                  <Link
                    to={link.href}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                    onClick={handleCloseMenu}
                  >
                    <Typography
                      sx={{
                        fontSize: 24,
                        fontStyle: "italic",
                        color: "white",
                        letterSpacing: 2,
                      }}
                    >
                      {link.label}
                    </Typography>
                  </Link>
                  {link.menuItems && (
                    <List sx={{ marginLeft: 5, paddingTop: "8px" }}>
                      {link.menuItems.map((item, subIndex) => (
                        <Slide
                          key={item.label}
                          direction="right"
                          in={openDrawer}
                          style={{
                            transitionDelay: `${
                              (index + subIndex + 1) * 100
                            }ms`,
                          }}
                        >
                          <ListItem
                            disablePadding
                            onClick={handleCloseMenu}
                            sx={{
                              transition: "background-color 0.3s ease",
                              "&:hover": {
                                backgroundColor: "#f3f3f3",
                              },
                            }}
                          >
                            <Link
                              to={item.href}
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: 22,
                                  color: "white",
                                  letterSpacing: 2,
                                }}
                              >
                                {item.label}
                              </Typography>
                            </Link>
                          </ListItem>
                        </Slide>
                      ))}
                    </List>
                  )}
                </ListItem>
              </Slide>
            ))}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "50%",
                height: 140,
                width: 140,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                marginLeft: 4,
              }}
            >
              <img
                src="https://i.imgur.com/Zcgk1vf.png"
                alt="Logo saying dailyvibe"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  borderRadius: "50%",
                }}
              />
            </Box>
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
