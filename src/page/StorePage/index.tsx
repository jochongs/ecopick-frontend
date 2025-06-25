import BottomTab from "../../components/BottomTab";
import StoreCard from "./ui/StoreCard";

export default function StorePage() {
  return (
    <div className="w-full max-w-[600px] bg-[#F4F9F4] mx-auto h-screen flex flex-col justify-start items-center">
      <header className="h-16.5 bg-white flex items-center justify-center w-full border-b-1 border-[#EBEBEB]">
        <h1 className="text-[20px]">주변 탄소중립 실천가게</h1>
      </header>
      <main className="flex-1 overflow-y-auto flex flex-col px-4.5 w-full relative pb-4">
        <h2 className="text-[20px] font-bold mt-5.5 ml-5">
          지역 내 친환경 가게
        </h2>
        <div className="flex flex-col gap-4.5 mt-7">
          {Array(10)
            .fill(0)
            .map(() => (
              <StoreCard />
            ))}
        </div>
      </main>
      <footer className="w-full">
        <BottomTab />
      </footer>
    </div>
  );
}
