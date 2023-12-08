"use client";

import loading from "@/assets/lottie/loading";
import Lottie from "react-lottie-player";

const LoadingPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Lottie animationData={loading} loop play className="w-52 h-52" />
    </div>
  );
};

export default LoadingPage;
