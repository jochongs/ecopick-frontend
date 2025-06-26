import BottomTab from "../../components/BottomTab";

export default function MyPage() {
  return (
    <div className="w-full max-w-[600px] bg-[#F4F9F4] mx-auto h-screen flex flex-col justify-start items-center">
      <header className="h-16.5 bg-white flex items-center justify-center w-full border-b-1 border-[#EBEBEB]">
        <h1 className="text-[20px]">마이페이지</h1>
      </header>
      <main className="flex-1 overflow-y-auto flex flex-col px-4.5 w-full relative pb-4">
        <div className="h-24"></div>
      </main>
      <footer className="w-full">
        <BottomTab />
      </footer>
    </div>
  );
}
