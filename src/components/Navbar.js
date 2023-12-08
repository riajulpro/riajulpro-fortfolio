"use client";

import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pages = [
    { route: "Home", pathname: "/" },
    { route: "About", pathname: "/about" },
    { route: "Projects", pathname: "/projects" },
    { route: "Elements", pathname: "/elements" },
    { route: "Blogs", pathname: "/blogs" },
    { route: "Contact", pathname: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar>
        <Toolbar className="w-9/12 mx-auto">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RIAJUL PRO
          </Typography>
          <Box className="flex gap-4">
            {pages.map((page) => (
              <Link
                key={page}
                className={`${pathname === page.pathname && "font-bold"}`}
                href={page.pathname}
              >
                {page.route}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
