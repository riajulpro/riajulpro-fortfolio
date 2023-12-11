"use client";

import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AutoModeIcon from "@mui/icons-material/AutoMode";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import DraftsIcon from "@mui/icons-material/Drafts";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";

import RiajulPro from "@/assets/icons/riajulpro.svg";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HomeSec from "./sections/HomeSec";

const drawerWidth = 240;

const Frame = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // -------------------------------------------------------------------------

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    handleDrawerToggle();
  };

  // Handle scroll events to determine the active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "education",
        "services",
        "contact",
      ];

      // Find the first section whose offsetTop is greater than the current scroll position
      const activeSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          return (
            scrollPosition >= element.offsetTop - 500 &&
            scrollPosition < element.offsetTop - 500 + element.offsetHeight
          );
        }
        return false;
      });

      // Update the active link based on the active section
      if (activeSection) {
        setActiveLink(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // -------------------------------------------------------------------------

  const drawerNav = (
    <Box>
      <div className="bg-colorBlack py-10 flex justify-center items-center">
        <Image src={RiajulPro} alt="RiaJul Pro" height={90} width={160} />
      </div>

      <Stack className="px-5 py-1 pt-3" spacing={1}>
        <Link href="#home">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "home" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <HomeIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Home
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Stack spacing={0} className="px-5 py-1">
        <Link href="#about">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "about" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <PersonIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              About
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Stack spacing={0} className="px-5 py-1">
        <Link href="#projects">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "projects" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <AutoModeIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Projects
            </Typography>
          </Stack>
        </Link>
      </Stack>

      <Stack spacing={1} className="px-5 py-1">
        <Link href="#skills">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "skills" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <InsightsIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Skills
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Stack spacing={1} className="px-5 py-1">
        <Link href="#education">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "education" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <SchoolIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Education
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Stack spacing={1} className="px-5 py-1">
        <Link href="#services">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "services" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <BusinessCenterIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Services
            </Typography>
          </Stack>
        </Link>
      </Stack>
      <Stack spacing={0} className="px-5 py-1">
        <Link href="#contact">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton
              className={`${
                activeLink === "contact" ? "bg-colorPrimary" : "bg-colorBlack"
              } group-hover:bg-colorPrimary`}
            >
              <DraftsIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Contact
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            display: { xs: "block", sm: "none" },
            background: "#141b26",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawerOption
        "
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Image src={RiajulPro} alt="RiaJul Pro" height={90} width={160} />
            <span>
              <PersonIcon />
            </span>
          </Toolbar>
        </AppBar>

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* Desktop Drawer */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#09101a",
                color: "white",
              },
            }}
          >
            {drawerNav}
          </Drawer>

          {/* Mobile Drawer */}
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: "#09101a",
                color: "white",
              },
            }}
            open
          >
            {drawerNav}
          </Drawer>
        </Box>

        {/* Main Option */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar sx={{ display: { xs: "block", sm: "none" } }} />

          {/* home section */}
          <section id="home">
            <HomeSec />
          </section>

          {/* about section */}
          <section id="about" className="md:h-screen">
            <h1>About</h1>
          </section>

          {/* projects section */}
          <section id="projects" className="md:h-screen">
            <h1>Projects</h1>
          </section>

          {/* skills section */}
          <section id="skills" className="md:h-screen">
            <h1>Skills</h1>
          </section>

          {/* education section */}
          <section id="education" className="md:h-screen">
            <h1>Education</h1>
          </section>

          {/* services section */}
          <section id="services" className="md:h-screen">
            <h1>Services</h1>
          </section>

          {/* contact section */}
          <section id="contact" className="md:h-screen">
            <h1>Contact</h1>
          </section>
        </Box>
      </Box>
    </div>
  );
};

export default Frame;
