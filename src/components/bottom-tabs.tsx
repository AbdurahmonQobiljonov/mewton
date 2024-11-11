import { BoostSvg } from '../icons/Boost';
import Friends from '../icons/Friends';
import { InfoSvg } from '../icons/InfoSvg';
import { MainSvg } from '../icons/Main';
import { TaskSvg } from '../icons/Task';
import { WalletSvg } from '../icons/Wallet';

export const BottomTabs = () => {
  return (
    <div className="fixed bottom-5 py-3 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
      <div className="text-center text-light w-1/5 flex flex-col items-center">
        <MainSvg />
        <p className="mt-1 text-[9px] ">Main</p>
      </div>
      <div className="text-center text-light w-1/5 flex flex-col items-center">
        <BoostSvg />
        <p className="mt-1 text-[9px]">Boost</p>
      </div>
      <div className="text-center text-light w-1/5 flex flex-col items-center">
        <TaskSvg />
        <p className="mt-1 text-[9px]">Task</p>
      </div>
      <div className="text-center text-light w-1/5 flex flex-col items-center">
        <Friends />
        <p className="mt-1 text-[9px]">Fends</p>
      </div>
      <div className="text-center text-light w-1/5 flex flex-col items-center">
        <InfoSvg />
        <p className="mt-1 text-[9px]">Info</p>
      </div>
      <div className="text-center text-light w-1/5 flex flex-col items-center">
        <WalletSvg />
        <p className="mt-1 text-[9px]">Wallet</p>
      </div>
    </div>
  );
};
