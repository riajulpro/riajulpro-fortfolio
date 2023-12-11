"use client";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

import RiajulPro from "@/assets/icons/riajulpro.svg";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

const SideBar = () => {
  return (
    <Box
      className="bg-bgColor h-screen sticky top-0 border-r-2 border-colorBlack"
      sx={{ width: "100%" }}
    >
      <div className="bg-colorBlack h-1/6 flex justify-center items-center">
        <Image src={RiajulPro} alt="RiaJul Pro" height={90} width={160} />
      </div>
      <Stack spacing={1} className="p-5">
        <Link href="#home">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            className="border-2 rounded-full border-colorBlack group cursor-pointer"
          >
            <IconButton className="bg-colorBlack group-hover:bg-colorPrimary">
              <HomeIcon className="text-white" />
            </IconButton>
            <Typography className="text-xs uppercase group-hover:pl-3 transition-all duration-300">
              Home
            </Typography>
          </Stack>
        </Link>
      </Stack>
    </Box>
  );
};

export default SideBar;
