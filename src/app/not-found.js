"use client";

import pageError from "@/assets/lottie/error404";
import Lottie from "react-lottie-player";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Lottie animationData={pageError} loop play className="" />
    </div>
  );
};

export default NotFoundPage;
