import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

type LinkItem = {
  label: string;
  href: string;
  menuItems?: { label: string; href: string }[];
};

export default function Oldie(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
        paddingY: 0.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
        flexDirection: "row",
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginLeft: isMobile ? 0 : 5,
          height: 75,
        }}
      >
        <Link to="/" style={{ position: "relative" }}>
          <img
            src="https://i.imgur.com/Zcgk1vf.png"
            alt="Logo"
            style={{
              width: "270px",
              height: "150px",
              objectFit: "contain",
            }}
          />
        </Link>
      </Box>

      {/* Menu Icon */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flexGrow: 1,
          marginRight: 5,
        }}
      >
        <IconButton aria-label="Toggle menu" onClick={handleToggleMenu}>
          <MenuIcon sx={{ color: "black", fontSize: 40 }} />
        </IconButton>
      </Box>

      {/* Drawer Section */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleCloseMenu}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "#dbbed1",
          },
        }}
      >
        <List
          sx={{
            paddingX: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: 2,
          }}
        >
          {links.map((link, index) => (
            <Slide
              key={link.label}
              direction="right"
              in={openDrawer}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  marginBottom: 1,
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#f3f3f3",
                  },
                }}
              >
                <Link
                  to={link.href}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    width: "100%",
                  }}
                  onClick={handleCloseMenu}
                >
                  <Typography
                    sx={{
                      fontSize: 22,
                      fontStyle: "italic",
                      letterSpacing: 2,
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>

                {/* Submenu */}
                {link.menuItems && (
                  <List sx={{ paddingLeft: 4, marginTop: 1 }}>
                    {link.menuItems.map((item, subIndex) => (
                      <Slide
                        key={item.label}
                        direction="right"
                        in={openDrawer}
                        style={{
                          transitionDelay: `${(index + subIndex + 1) * 100}ms`,
                        }}
                      >
                        <ListItem
                          disablePadding
                          sx={{
                            "&:hover": {
                              backgroundColor: "#f3f3f3",
                            },
                          }}
                        >
                          <Link
                            to={item.href}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              width: "100%",
                            }}
                            onClick={handleCloseMenu}
                          >
                            <Typography
                              sx={{
                                fontSize: 20,
                                fontStyle: "italic",
                                letterSpacing: 1,
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
        </List>
      </Drawer>
    </Box>
  );
}
