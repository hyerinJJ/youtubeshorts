import React from "react";
import ShortsFeed from "./components/ShortsFeed";
import TopHeader from "./components/TopHeader";

export default function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="relative w-full max-w-[430px] h-dvh overflow-hidden bg-black">
        <TopHeader />
        <div className="w-full h-full">
          <ShortsFeed />
        </div>
      </div>
    </div>
  );
}
