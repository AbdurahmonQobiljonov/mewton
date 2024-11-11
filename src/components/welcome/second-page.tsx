import { Cards } from '../cards';
import { WelcomeBottom } from '../welcome-bottom';
import { WelcomeHead } from '../welcome-head';

export const SecondPage = () => {
  return (
    <div className="bg-welcomeBg flex justify-center font-sans">
      <div className="w-full  text-white h-screen font-bold flex flex-col max-w-xl">
        <WelcomeHead />
        <div className="flex flex-1 flex-col items-center gap-16 mt-10">
          <div className="text-center w-[65%]">
            <h3 className="text-2xl font-semibold">
              Unique and varied boost system for <span className="text-orange">faster farming</span>
            </h3>
          </div>
          <Cards />
        </div>
        <WelcomeBottom />
      </div>
    </div>
  );
};
