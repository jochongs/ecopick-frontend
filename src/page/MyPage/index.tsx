import BottomTab from "../../components/BottomTab";
import ProfileIcon from "../../assets/profile-icon.svg?react";
import CompanyCard from "./ui/CompnayCard";

export default function MyPage() {
  return (
    <div className="w-full max-w-[600px] bg-[#F5F6F7] mx-auto h-screen flex flex-col justify-start items-center">
      <header className="h-16.5 bg-white flex items-center justify-center w-full border-b-1 border-[#EBEBEB]">
        <h1 className="text-[20px]">마이페이지</h1>
      </header>
      <main className="flex-1 overflow-y-auto flex flex-col px-4.5 w-full relative pb-4 items-center">
        <div className="mt-5.5 w-25 h-25 rounded-full bg-[#E8F5E9] flex justify-center items-center border-1 border-[#E5E5E5] border-solid">
          <ProfileIcon />
        </div>
        <p className="mt-3 font-bold text-[20px]">김민지</p>
        <span className="text-[15px] text-[#676767] mt-3.5">
          건강한 초록사회를 위해 노력하고 있어요.
        </span>
        <div className="mt-3.5 w-full bg-white rounded-[10px] flex flex-col px-6">
          <h3 className="font-bold text-[20px] mt-7">기업 연동 관리</h3>
          <span className="mt-4 text-[15px] text-[#676767]">
            에코픽과 연동된 기업 목록을 확인하고 수정할 수 있어요.
          </span>
          <div className="flex flex-col gap-2 mt-5">
            {Array(10)
              .fill(0)
              .map(() => (
                <CompanyCard
                  connected={true}
                  imgSrc="/src/assets/baemin-logo.png"
                  name="배달의민족"
                />
              ))}
          </div>
        </div>
      </main>
      <footer className="w-full">
        <BottomTab />
      </footer>
    </div>
  );
}
