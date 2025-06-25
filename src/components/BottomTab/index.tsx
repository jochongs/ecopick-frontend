import HomeIcon from "../../assets/bottom-tab/home.svg?react";
import FillHomeIcon from "../../assets/bottom-tab/home-fill.svg?react";
import MypageIcon from "../../assets/bottom-tab/mypage.svg?react";
import FillMypageIcon from "../../assets/bottom-tab/mypage-fill.svg?react";
import RewardIcon from "../../assets/bottom-tab/reward.svg?react";
import FillRewardIcon from "../../assets/bottom-tab/reward-fill.svg?react";
import StoreIcon from "../../assets/bottom-tab/store.svg?react";
import FillStoreIcon from "../../assets/bottom-tab/store-fill.svg?react";

import LinkButton from "./ui/LinkButton";

export default function BottomTab() {
  return (
    <nav className="h-16.5 w-full bg-white border-t-1 border-t-solid border-[#EBEBEB]">
      <ul className="flex items-center w-full h-full">
        <LinkButton
          DefaultIcon={HomeIcon}
          FilledIcon={FillHomeIcon}
          name="홈"
          href="/main"
          deactivated
        />
        <LinkButton
          DefaultIcon={StoreIcon}
          FilledIcon={FillStoreIcon}
          name="실천가게"
          href="/store"
          deactivated
        />
        <LinkButton
          DefaultIcon={RewardIcon}
          FilledIcon={FillRewardIcon}
          name="리워드"
          href="/reward"
          deactivated
        />
        <LinkButton
          DefaultIcon={MypageIcon}
          FilledIcon={FillMypageIcon}
          name="마이페이지"
          href="/mypage"
          deactivated
        />
      </ul>
    </nav>
  );
}
