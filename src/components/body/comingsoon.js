import React from "react";
// Import the logo images
// import youtubeLogo from "./../../assets/ytlogo.png"; // Add the correct path to your image assets
// import tiktokLogo from "./../../assets/tiktok.png"; // Add the correct path to your image assets
// import instagramLogo from "./../../assets/instagram.png"; // Add the correct path to your image assets
import FollowUs from "./followus";
import Socials from "./socials";
export default function ComingSoon() {
  return (
    <div className="pattern-hive-scale-500 flex flex-col items-center justify-center h-screen text-white ">
      <h1 className="text-8xl mb-8">COMING SOON</h1>
      <p className="text-2xl">
        <b className="text-green-600">SUBMIT</b> your confessions at{" "}
        <b className="text-red-400">submit@confessionnepal.com</b>
      </p>
      <FollowUs />
      <Socials />
    </div>
  );
}
