import {
  Box,
  Link as MuiLink,
  Typography,
  useMediaQuery,
  useTheme,
  Popper,
  Grow,
  Paper,
  MenuItem,
  MenuList,
} from "@mui/material";
import React, { useState, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

type LinkItem = {
  label: string;
  href: string;
  menuItems?: { label: string; href: string }[];
};

const MenuLink = ({
  link,
  openMenu,
  anchorEl,
  handleMouseEnter,
  handleMouseLeave,
  handleSubMenuMouseEnter,
  handleSubMenuMouseLeave,
  handleCloseMenu,
}: {
  link: LinkItem;
  openMenu: string | null;
  anchorEl: HTMLElement | null;
  handleMouseEnter: (
    event: React.MouseEvent<HTMLElement>,
    menuName: string
  ) => void;
  handleMouseLeave: () => void;
  handleSubMenuMouseEnter: () => void;
  handleSubMenuMouseLeave: () => void;
  handleCloseMenu: () => void;
}) => (
  <div
    onMouseEnter={(e) => handleMouseEnter(e, link.label)}
    onMouseLeave={handleMouseLeave}
    style={{ display: "flex", alignItems: "center" }}
  >
    <Link to={link.href} style={{ textDecoration: "none" }}>
      <Typography
        variant="body1"
        sx={{
          marginY: 1,
          color: "black",
          "&:hover": {
            color: "#d29bbf",
          },
        }}
      >
        {link.label}
      </Typography>
    </Link>
    {link.menuItems && (
      <>
        <KeyboardArrowDownIcon />
        <Popper
          open={openMenu === link.label}
          anchorEl={anchorEl}
          role={undefined}
          transition
          disablePortal
          style={{ zIndex: 1 }}
          placement="bottom-start"
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [0, 8],
              },
            },
          ]}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: "top center" }}
            >
              <Paper
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
              >
                <MenuList autoFocusItem={openMenu === link.label}>
                  {link.menuItems?.map((item, index) => (
                    <MenuItem
                      key={index}
                      onClick={handleCloseMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#d29bbf", 
                          color: "#fff", 
                        },
                      }}
                    >
                      <Link
                        to={item.href}
                        style={{
                          textDecoration: "none",
                          color: "#000", 
                        }}
                      >
                        {item.label}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Grow>
          )}
        </Popper>
      </>
    )}
  </div>
);

export default function CustomHeader2(): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const timeoutRef = useRef<number | null>(null);

  const handleToggleMenu = (
    event: React.MouseEvent<HTMLElement>,
    menuName: string
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (openMenu === menuName) {
      setOpenMenu(null);
      setAnchorEl(null);
    } else {
      setOpenMenu(menuName);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLElement>,
    menuName: string
  ) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    handleToggleMenu(event, menuName);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleCloseMenu();
    }, 0);
  };

  const handleSubMenuMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleSubMenuMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      handleCloseMenu();
    }, 0);
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

        // { label: 'Trädgårdsfix', href: '/tradgardsfix' }
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
    { label: "Kontakt", href: "/kontakt" },
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
          marginLeft: isMobile ? 0 : 5,
        }}
      >
        <Link to="/" style={{ marginY: 1 }}>
          <img
            src="https://i.imgur.com/pdj2vhA.png"
            alt="Logo saying dailyvibe"
            height={70}
            width={210}
          />
        </Link>
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              justifyContent: "flex-end",
              marginRight: 1,
              flexGrow: 1,
              marginLeft: 30,
            }}
          >
            {links.map((link) => (
              <React.Fragment key={link.label}>
                <MenuLink
                  link={link}
                  openMenu={openMenu}
                  anchorEl={anchorEl}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleSubMenuMouseEnter={handleSubMenuMouseEnter}
                  handleSubMenuMouseLeave={handleSubMenuMouseLeave}
                  handleCloseMenu={handleCloseMenu}
                />
                <div
                  style={{ height: 20, width: 2, backgroundColor: "grey" }}
                />
              </React.Fragment>
            ))}
          </Box>
        )}
      </Box>

      {isMobile && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
              marginTop: 1,
            }}
          >
            <MuiLink href="/about" sx={{ textDecoration: "none", marginY: 1 }}>
              <Typography variant="h6">LÄS MER</Typography>
            </MuiLink>
            <MuiLink
              href="/download"
              sx={{ textDecoration: "none", marginY: 1 }}
            >
              <Typography variant="h6">LADDA NED</Typography>
            </MuiLink>
          </Box>
        </>
      )}
    </Box>
  );
}
