import { WelcomeBottom } from '../welcome-bottom';
import { WelcomeHead } from '../welcome-head';

export const ThirdPage = () => {
  return (
    <div className="bg-welcomeBg flex justify-center font-sans">
      <div className="w-full  text-white h-screen font-bold flex flex-col max-w-xl">
        <WelcomeHead />
        <div className="flex flex-1 flex-col items-center gap-16 mt-10">
          <div className="text-center w-[75%]">
            <h3 className="text-2xl font-semibold">
              <span className="text-orange block">Instant withdrawals</span>
              to your wallet!
            </h3>
          </div>
          <div className="bg-gray w-4/5 gap-5 rounded-lg p-4 flex flex-col justify-between items-center">
            <span>UJF...33_</span>
            <span className="text-2xl">Withdraw</span>
            <div className="w-full h-[1px] bg-slate-300" />
            <input
              type="number"
              placeholder="Enter the amount in TON"
              className="w-full rounded-md px-3 py-1 bg-cardBg font-normal"
            />
            <div className="w-full flex flex-col justify-between gap-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">Fee</span>
                <span className="text-xs font-bold">Will be credited</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">3%</span>
                <span className="text-xs font-bold">0</span>
              </div>
            </div>
            <button className="bg-orange w-full rounded-lg p-1 font-semibold text-base">
              Withdraw
            </button>
          </div>
        </div>
        <WelcomeBottom />
      </div>
    </div>
  );
};
