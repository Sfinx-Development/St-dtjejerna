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
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
        paddingY: 0.1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexDirection: isMobile ? "row" : "row",
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: "white",
      }}
      component={"header"}
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
        <Link to="/" style={{ marginTop: 2 }}>
          <img
            src="https://i.imgur.com/Zcgk1vf.png"
            alt="Logo saying dailyvibe"
            style={{
              width: "100px",
              objectFit: "contain",
              left: 0,
              zIndex: 999,
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
              width: 280,
              backgroundColor: theme.palette.background.paper,
              paddingTop: 2,
            },
          }}
        >
          <List sx={{ width: "100%" }}>
            {links.map((link) => (
              <Box key={link.label}>
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
                    <ListItemText primary={link.label} />
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
                {link.menuItems && (
                  <Collapse
                    in={openSubmenu === link.label}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {link.menuItems.map((item) => (
                        <ListItemButton
                          key={item.label}
                          sx={{ pl: 4 }}
                          component={Link}
                          to={item.href}
                          onClick={handleCloseMenu}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
                <Divider />
              </Box>
            ))}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
