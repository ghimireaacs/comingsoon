import React from "react";

export default function Socials() {
  return (
    <div class="grid grid-cols-2 md:grid-cols-2 gap-4">
      <a
        href="https://www.youtube.com/@confession_nepal"
        title="Confession Nepal On YouTube"
        class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-red-600 hover:bg-red-600 shadow-md py-2 px-6 inline-flex items-center transition duration-500"
      >
        <span class="mx-auto">Youtube</span>
      </a>
      <a
        href="https://www.tiktok.com/@confession_nepal"
        title="Confession Nepal On TikTok"
        class="md:w-32 tracking-wide font-bold rounded border-2 border-indigo-500 hover:text-white hover:border-blue-500 hover:bg-blue-500 shadow-md py-2 px-6 inline-flex items-center transition duration-500"
      >
        <span class="mx-auto">TikTok</span>
      </a>
    </div>
  );
}
