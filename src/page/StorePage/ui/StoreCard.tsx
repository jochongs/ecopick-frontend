import StoreIcon from "../../../assets/store-icon.svg?react";

export default function StoreCard() {
  return (
    <article className="h-23 border-solid border-1 border-[#DFDFDF] rounded-[15px] flex items-center bg-white">
      <div className="w-12.5 h-12.5 ml-5 rounded-full bg-[#EDF7ED] flex items-center justify-center mr-5">
        <StoreIcon />
      </div>
      <main className="flex flex-col">
        <h3 className="text-[16px] font-semibold">그린 카페</h3>
        <span className="text-[#919191] text-[16px] mt-2">
          서울 강남구 테헤란로 1233
        </span>
      </main>
    </article>
  );
}
