import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Grow,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

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
    <Link href={link.href} sx={{ textDecoration: "none" }}>
      <Typography
        variant="body1"
        sx={{
          paddingY: 1.5,
          paddingX: 1.5,
          color: "#333",
          fontSize: 16,
          lineHeight: "1.4",
          fontWeight: 100,
          letterSpacing: 0.5,
          transition: "all 0.3s ease",
          "&:hover": {
            color: "#e48bb1",
            transform: "scale(1.08)",
          },
        }}
      >
        {link.label}
      </Typography>
    </Link>
    {link.menuItems && (
      <>
        <KeyboardArrowDownIcon sx={{ color: "#555556" }} />
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
                          background: "#f8d7e5",
                          color: "#fff",
                          transform: "scale(1.1)",
                          transition: "transform 0.3s ease",
                        },
                      }}
                    >
                      <Link
                        href={item.href}
                        sx={{
                          textDecoration: "none",
                          color: "#555556",
                          transition: "transform 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.1)",
                            color: "#393939",
                          },
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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      component={"header"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        width: "100%",

        background: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: isMobile ? "column" : "row",
        height: "90px",
        boxShadow: hasScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.3s ease-in-out",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40px", // justera höjden på toningen

          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Link
          href="/"
          sx={{
            position: "relative",
            margin: 0,
            padding: 0,
          }}
        >
          <img
            src="https://i.imgur.com/Zcgk1vf.png"
            alt="Logo saying dailyvibe"
            style={{
              marginLeft: 20,
              height: "90px",
              objectFit: "contain",
              color: "white",
              transition: "transform 0.3s ease",
            }}
          />
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          zIndex: 9999,
          marginRight: 4,
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
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
}
