import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Slide,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type LinkItem = {
  label: string;
  href: string;
  menuItems?: { label: string; href: string }[];
};

export default function CustomHeader2(): JSX.Element {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  useEffect(() => {
    if (openDrawer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDrawer]);

  const handleToggleMenu = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleCloseMenu = () => {
    setOpenDrawer(false);
  };

  const handleToggleSubmenu = (menuName: string) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "white",
      }}
      component={"header"}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          marginLeft: 2,
          height: 75,
        }}
      >
        <Link to="/" style={{ marginTop: 2 }}>
          <img
            src="https://i.imgur.com/Zcgk1vf.png"
            alt="Logo"
            style={{
              width: "80px",
              objectFit: "contain",
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
        }}
      >
        <IconButton onClick={handleToggleMenu}>
          <MenuIcon sx={{ color: "black", fontSize: 40 }} />
        </IconButton>

        {/* Drawer Section */}
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={handleCloseMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 280,
              backgroundColor: "#dbbed1",
              paddingY: 2,
            },
          }}
        >
          <List>
            {links.map((link, index) => (
              <Slide
                key={link.label}
                direction="right"
                in={openDrawer}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Box>
                  <ListItem
                    disablePadding
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.action.hover,
                      },
                    }}
                  >
                    <ListItemButton
                      onClick={
                        link.menuItems
                          ? () => handleToggleSubmenu(link.label)
                          : handleCloseMenu
                      }
                      component={link.menuItems ? "div" : Link}
                      to={!link.menuItems ? link.href : undefined}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            sx={{
                              fontFamily: "'Roboto', sans-serif",
                              fontSize: "18px",
                              // fontWeight: "500",
                              color: "#333",
                              letterSpacing: "0.5px",
                            }}
                          >
                            {link.label}
                          </Typography>
                        }
                      />

                      {link.menuItems && (
                        <ListItemIcon>
                          <ArrowForwardIosIcon
                            sx={{
                              transform:
                                openSubmenu === link.label
                                  ? "rotate(90deg)"
                                  : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        </ListItemIcon>
                      )}
                    </ListItemButton>
                  </ListItem>

                  {/* Submenu */}
                  {link.menuItems && (
                    <Collapse
                      in={openSubmenu === link.label}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
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
                            <ListItemButton
                              sx={{ pl: 4 }}
                              component={Link}
                              to={item.href}
                              onClick={handleCloseMenu}
                            >
                              <ListItemText primary={item.label} />
                            </ListItemButton>
                          </Slide>
                        ))}
                      </List>
                    </Collapse>
                  )}
                  <Divider />
                </Box>
              </Slide>
            ))}
          </List>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              justifyContent: "center",
              height: "100%",
              marginBottom: 2,
            }}
          >
            <Link
              to="/"
              style={{
                position: "relative",
                backgroundColor: "white",
                borderRadius: "50%",
                height: 150,
                width: 150,
              }}
            >
              <img
                src="https://i.imgur.com/Zcgk1vf.png"
                alt="Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}
