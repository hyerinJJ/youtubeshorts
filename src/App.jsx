import ShortsFeed from "./components/ShortsFeed";
import TopHeader from "./components/TopHeader";

export default function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="relative w-full max-w-[430px] h-dvh overflow-hidden bg-black lg:w-[calc(100dvh*9/16)] lg:max-w-none">
        <TopHeader />
        <div className="w-full h-full">
          <ShortsFeed />
        </div>
      </div>
    </div>
  );
}
