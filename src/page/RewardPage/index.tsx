import BottomTab from "../../components/BottomTab";
import CouponCard from "./ui/CouponCard";
import HoldCouponCard from "./ui/HoldCouponCard";

export default function RewardPage() {
  return (
    <div className="w-full max-w-[600px] bg-[#F5F6F7] mx-auto h-screen flex flex-col justify-start items-center">
      <header className="h-16.5 bg-white flex items-center justify-center w-full border-b-1 border-[#EBEBEB]">
        <h1 className="text-[20px]">리워드</h1>
      </header>
      <main className="flex-1 overflow-y-auto flex flex-col px-4.5 w-full relative pb-4">
        <div className="flex justify-between mt-7.5 w-full h-24 rounded-[20px] bg-[#E8F5E9] shrink-0">
          <div className="flex flex-col mt-5 ml-5">
            <span className="text-[#676767] font-medium text-[15px]">
              누적 포인트
            </span>
            <span className="text-[25px] font-bold text-[#3A915F] mt-2.5">
              3,450
            </span>
          </div>
          <div className="flex flex-col items-end mt-5 mr-5">
            <span className="text-[#676767] font-medium text-[15px]">
              사용 가능 쿠폰
            </span>
            <div className="mt-2.5">
              <span className="text-[25px] font-bold text-[#3A915F]">2</span>
              <span className="text-[20px] font-bold text-[#3A915F]">장</span>
            </div>
          </div>
        </div>
        <h2 className="font-bold text-[20px] mt-6">교환 가능한 쿠폰</h2>
        <div className="mt-6 flex flex-col gap-3">
          {Array(2)
            .fill(0)
            .map(() => (
              <CouponCard />
            ))}
        </div>
        <h2 className="font-bold text-[20px] mt-6">보유 쿠폰</h2>
        <div className="mt-6 flex flex-col gap-3">
          {Array(2)
            .fill(0)
            .map(() => (
              <HoldCouponCard />
            ))}
        </div>
      </main>
      <footer className="w-full">
        <BottomTab />
      </footer>
    </div>
  );
}
