import { Box, Link, Typography, useMediaQuery, useTheme, Popper, Grow, Paper, MenuItem, MenuList, ClickAwayListener } from "@mui/material";
import React, { useState, useRef } from 'react';

export default function CustomHeader2() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const timeoutRef = useRef(null);

  const handleToggleMenu = (event, menuName) => {
    clearTimeout(timeoutRef.current);
  
    if (openMenu === menuName) {
      setOpenMenu(null);
      setAnchorEl(null);
    } else {
      // Close all other menus first
      setOpenMenu(menuName);
      setAnchorEl(event.currentTarget);
    }
  };
  
  const handleCloseMenu = () => {
    // Close the menu only if the anchor element is not hovered
    if (!anchorEl?.contains(document.activeElement)) {
      setOpenMenu(null);
      setAnchorEl(null);
    }
  };
  


  const links = [
    { label: 'STARTSIDAN', href: '/about' },
    { label: 'OM OSS', href: '/download' },
    { label: 'TJÄNSTER', href: '/download', menuItems: ['Byggstäd', 'Hemstäd', 'Flyttstäd', 'Fönsterputs', 'Företagsstäd', 'Trappstäd', 'Trädgårdsfix'] },
    { label: 'ORTER', href: '/download', menuItems: ['Borås', 'Dalsjöfors', 'Fristad', 'Sandared', 'Sjömarken'] },
    { label: 'KONTAKT', href: '/download' },
    { label: 'OFFERT', href: '/download' },
  ];

  return (
    <Box
      sx={{
        paddingY: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Box
       onMouseLeave={handleCloseMenu}
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
            height={100}
            width={240}
          />
        </Link>
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              marginLeft: 10,
            }}
          >
            {links.map((link) => (
              <React.Fragment key={link.label}>
                <Link
                  href={link.href}
                  onMouseEnter={(e) => link.menuItems && handleToggleMenu(e, link.label)}
                  onMouseLeave={handleCloseMenu}
                  sx={{
                    textDecoration: "none",
                    marginY: 1,
                    color: "black",
                    "&:hover": {
                      color: "#d29bbf",
                    },
                  }}
                >
                  <Typography variant="h6">{link.label}</Typography>
                </Link>
                <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />

                {link.menuItems && (
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
                        timeout={{ enter: 1000, exit: 100 }}
                        style={{
                          transformOrigin: 'top center',
                          transitionTimingFunction: 'ease-in-out',
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleCloseMenu}>
                            <MenuList autoFocusItem={openMenu === link.label}>
                              {link.menuItems.map((item, index) => (
                                <MenuItem key={index} onClick={handleCloseMenu}>{item}</MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                )}
              </React.Fragment>
            ))}
          </Box>
        )}
      </Box>

      {isMobile && (
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
      )}
    </Box>
  );
}








// import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";

// export default function CustomHeader2() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       sx={{
//         paddingY: 2,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         width: "100%",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         flexDirection: isMobile ? "column" : "row",
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 2,
//           marginLeft: isMobile ? 0 : 5,
//         }}
//       >
//         <Link href="/" sx={{ marginY: 1 }}>
//           <img
//             src="https://i.imgur.com/pdj2vhA.png"
//             alt="Logo saying dailyvibe"
//             height={100}
//             width={240}
//           />
//         </Link>
//         {!isMobile && (
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 4,
//               marginLeft: 10,
//             }}
//           >
//             <Link
//               href="/about"
//               sx={{
//                 textDecoration: "none",
//                 marginY: 1,
//                 color: "black",
//                 "&:hover": {
//                   color: "#d29bbf",
//                 },
//               }}
//             >
//               <Typography variant="h6">STARTSIDAN</Typography>
//             </Link>
//             <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
//             <Link
//               href="/download"
//               sx={{
//                 textDecoration: "none",
//                 marginY: 1,
//                 color: "black",
//                 "&:hover": {
//                   color: "#d29bbf",
//                 },
//               }}
//             >
//               <Typography variant="h6">OM OSS</Typography>
//             </Link>
//             <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
//             <Link
//               href="/download"
//               sx={{
//                 textDecoration: "none",
//                 marginY: 1,
//                 color: "black",
//                 "&:hover": {
//                   color: "#d29bbf",
//                 },
//               }}
//             >
//               <Typography variant="h6">TJÄNSTER</Typography>
//             </Link>
//             <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
//             <Link
//               href="/download"
//               sx={{
//                 textDecoration: "none",
//                 marginY: 1,
//                 color: "black",
//                 "&:hover": {
//                   color: "#d29bbf",
//                 },
//               }}
//             >
//               <Typography variant="h6">ORDER</Typography>
//             </Link>
//             <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
//             <Link
//               href="/download"
//               sx={{
//                 textDecoration: "none",
//                 marginY: 1,
//                 color: "black",
//                 "&:hover": {
//                   color: "#d29bbf",
//                 },
//               }}
//             >
//               <Typography variant="h6">KONTAKT</Typography>
//             </Link>
//             <div style={{ height: 20, width: 2, backgroundColor: "grey" }} />
//             <Link
//               href="/download"
//               sx={{
//                 textDecoration: "none",
//                 marginY: 1,
//                 color: "black",
//                 "&:hover": {
//                   color: "#d29bbf",
//                 },
//               }}
//             >
//               <Typography variant="h6">OFFERT</Typography>
//             </Link>
//           </Box>
//         )}
//       </Box>

//       {isMobile && (
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             gap: 1,
//             marginTop: 1,
//           }}
//         >
//           <Link href="/about" sx={{ textDecoration: "none", marginY: 1 }}>
//             <Typography variant="h6">LÄS MER</Typography>
//           </Link>
//           <Link href="/download" sx={{ textDecoration: "none", marginY: 1 }}>
//             <Typography variant="h6">LADDA NED</Typography>
//           </Link>
//         </Box>
//       )}
//     </Box>
//   );
// }
