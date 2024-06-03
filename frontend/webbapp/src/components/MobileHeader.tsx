import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
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

export default function CustomHeader2(): JSX.Element {
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
    {
      label: "Orter",
      href: "/orter",
      menuItems: [
        { label: "Borås", href: "/orter" },
        { label: "Dalsjöfors", href: "/orter" },
        { label: "Fristad", href: "/orter" },
        { label: "Sandared", href: "/orter" },
        { label: "Sjömarken", href: "/orter" },
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
        flexDirection: isMobile ? "column" : "row",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginLeft: isMobile ? 0 : 5,
          height: "100px",
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
              width: "250px",
              marginTop: 25,
              height: "150px",
              objectFit: "contain",
              position: "absolute",
              top: "90%",
              transform: "translateY(-50%)",
              zIndex: 9999,
            }}
          />
        </Link>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            marginRight: 5,
            flexGrow: 1,
            marginLeft: 40,
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
                marginLeft: 1,
                display: "flex",
                zIndex: 99991,
                flexDirection: "column",
              }}
            >
              {links.map((link) => (
                <ListItem
                  key={link.label}
                  disablePadding
                  sx={{
                    display: "flex",
                    zIndex: 99991,
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
                    <Typography sx={{ fontSize: 25 }}>{link.label}</Typography>
                  </Link>
                  {link.menuItems && (
                    <List sx={{ marginLeft: 5, paddingTop: "8px" }}>
                      {link.menuItems.map((item, index) => (
                        <ListItem
                          key={index}
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
                            <Typography sx={{ fontSize: 22 }}>
                              {item.label}
                            </Typography>
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  )}
                </ListItem>
              ))}
              <img
                src="https://i.imgur.com/Zcgk1vf.png"
                alt="Logo saying dailyvibe"
                style={{
                  width: "250px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
            </List>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}
