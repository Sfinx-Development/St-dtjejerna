import { Box, Link, Typography, useMediaQuery, useTheme, Popper, Grow, Paper, MenuItem, MenuList, ClickAwayListener } from "@mui/material";
import React, { useState, useRef } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type LinkItem = {
  label: string;
  href: string;
  menuItems?: string[];
};

const MenuLink = ({ link, openMenu, anchorEl, handleMouseEnter, handleMouseLeave, handleSubMenuMouseEnter, handleSubMenuMouseLeave, handleCloseMenu }: { link: LinkItem, openMenu: string | null, anchorEl: HTMLElement | null, handleMouseEnter: (event: React.MouseEvent<HTMLElement>, menuName: string) => void, handleMouseLeave: () => void, handleSubMenuMouseEnter: () => void, handleSubMenuMouseLeave: () => void, handleCloseMenu: () => void }) => (
  <div
    onMouseEnter={(e) => handleMouseEnter(e, link.label)}
    onMouseLeave={handleMouseLeave}
    style={{ display: 'flex', alignItems: 'center' }}
  >
    <Link
      href={link.href}
      sx={{
        textDecoration: "none",
        marginY: 1,
        color: "black",
        "&:hover": {
          color: "#d29bbf",
        },
      }}
    >
      <Typography variant="body1">{link.label}</Typography>
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
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              timeout={{ enter: 1000, exit: 0 }}
              style={{
                transformOrigin: 'top center',
                transitionTimingFunction: 'ease-in-out',
              }}
            >
              <Paper
                onMouseEnter={handleSubMenuMouseEnter}
                onMouseLeave={handleSubMenuMouseLeave}
              >
                <MenuList autoFocusItem={openMenu === link.label}>
                  {link.menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleCloseMenu}>{item}</MenuItem>
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleToggleMenu = (event: React.MouseEvent<HTMLElement>, menuName: string) => {
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

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>, menuName: string) => {
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
    { label: 'Startsidan', href: '/about' },
    { label: 'Om oss', href: '/download' },
    { label: 'Tjänster', href: '/download', menuItems: ['Byggstäd', 'Hemstäd', 'Flyttstäd', 'Fönsterputs', 'Företagsstäd', 'Trappstäd', 'Trädgårdsfix'] },
    { label: 'Orter', href: '/download', menuItems: ['Borås', 'Dalsjöfors', 'Fristad', 'Sandared', 'Sjömarken'] },
    { label: 'Kontakt', href: '/download' },
    { label: 'Offert', href: '/download' },
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
        <Link href="/" sx={{ marginY: 1 }}>
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
                <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
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
            <Link href="/about" sx={{ textDecoration: "none", marginY: 1 }}>
              <Typography variant="h6">LÄS MER</Typography>
            </Link>
            <Link href="/download" sx={{ textDecoration: "none", marginY: 1 }}>
              <Typography variant="h6">LADDA NED</Typography>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
}
