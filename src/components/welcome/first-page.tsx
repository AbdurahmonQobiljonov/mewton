import { WelcomeBottom } from '../welcome-bottom';
import { WelcomeHead } from '../welcome-head';

export const WelcomeFirstPage = () => {
  return (
    <div className="bg-welcomeBg flex justify-center font-sans">
      <div className="w-full  text-white h-screen font-bold flex flex-col max-w-xl">
        <WelcomeHead />
        <div className="flex flex-1 flex-col items-center justify-between mt-10">
          <div className="text-center w-[85%]">
            <h3 className="text-2xl font-semibold">
              Play & Earn <span className="text-orange">TON</span>
            </h3>
            <span className="text-xs font-medium">
              The first p2e game where profits already have their{' '}
              <span className="text-orange">real value</span>
            </span>
          </div>
          <div className="w-[283px] h-[283px] p-4 rounded-full circle-outer">
            <div className="w-full h-full rounded-full circle-inner"></div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-4xl text-orange mr-10">LOTS OF </span>
            <span className="font-semibold text-4xl ml-10">PER DAY</span>
          </div>
          <span className="text-xs text-center font-medium text-welcomeText">
            Tap and earn TON directly in the app!
          </span>
        </div>
        <WelcomeBottom />
      </div>
    </div>
  );
};
