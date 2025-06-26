import { overlay } from "overlay-kit";
import CouponDialog from "../../../components/CouponDialog";

export default function HoldCouponCard() {
  const clickUseBtnHandle = async () => {
    await overlay.openAsync((props) => (
      <CouponDialog
        onClose={() => {
          overlay.close(props.overlayId);
        }}
        isOpen={props.isOpen}
      />
    ));
  };

  return (
    <article className="h-28.5 rounded-[20px] bg-white shrink-0 relative">
      <div className="ml-6 mt-4 flex flex-col">
        <h3 className="font-bold text-[20px]">1,000원 할인 쿠폰</h3>
        <span className="mt-2 font-medium text-[#676767] text-[18px]">
          실천가게 어디서나 사용 가능
        </span>
        <span className="text-[13px] text-[#919191] mt-2">7일간 사용 가능</span>
      </div>
      <div className="absolute right-3.5 top-12">
        <button
          className="bg-[#42A066] rounded-[10px] text-white w-25 h-10 text-[18px]"
          onClick={clickUseBtnHandle}
        >
          사용하기
        </button>
      </div>
    </article>
  );
}
