import { BottomTabs } from '../components/bottom-tabs';
export const Tasks = () => {
  return (
    <div className="bg-welcomeBg flex justify-center font-sans ">
      <div className="w-full text-white h-screen font-bold flex flex-col max-w-xl py-10">
        <div className="flex justify-between items-center  px-4">
          <div className="  flex gap-5 items-center">
            <div className="w-12 h-12 bg-light rounded-md text-xs flex items-center justify-center text-center">
              user avatar
            </div>
            <span className="text-xs">Name</span>
          </div>
          <button className="bg-primary rounded-xl font-medium text-xs px-4 py-2">
            Connect wallet
          </button>
        </div>
        <div className="flex-1  my-10 mx-4">
          <h1 className="text-3xl mb-10">Tasks</h1>
          <div className="flex flex-col">
            <div className="flex w-full justify-between items-center bg-gray rounded-lg px-4 py-2">
              <span className="text-orange text-semibold text-[14px]">
                Subscribe<span className="text-white"> to "channel name"</span>
              </span>
              <div className="flex flex-col gap-2">
                <button className="bg-orange rounded-lg py-1 px-5 font-medium  font-sans text-xs">
                  start
                </button>
                <span className="text-xs">+200$</span>
              </div>
            </div>
          </div>
        </div>
        <BottomTabs />
      </div>
    </div>
  );
};
