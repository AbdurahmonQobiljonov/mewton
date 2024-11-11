import { BottomTabs } from '../components/bottom-tabs';
export const Friends = () => {
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
          <h1 className="text-2xl mb-2 text-center">Invite your friends!</h1>
          <h3 className="text-[14px] text-center">and get bonuses</h3>
          <div className="flex flex-col gap-5">
            <div className="flex w-full justify-between items-center bg-gray rounded-lg px-4 py-2">
              <span className=" text-semibold text-2xl">0.001</span>
              <span className="text-base w-1/3">for 1 invitee friend</span>
            </div>
            <div className="flex w-full justify-between items-center bg-gray rounded-lg px-4 py-2">
              <span className=" text-semibold text-2xl">0.001</span>
              <span className="text-base w-1/3">
                for 1 invitee <span className="text-orange">active</span> friend
              </span>
            </div>
            <div className="flex gap-2">
              <button className="bg-orange rounded-lg py-1 px-5 font-semibold  font-sans text-lg flex-1">
                invite friends
              </button>
              <button className="bg-orange rounded-lg py-1 px-5 font-semibold  font-sans text-lg"></button>
            </div>
          </div>
          <h3 className="text-lg mt-5">Your invited friends:</h3>
          <div className="flex flex-col my-5">
            <div className="flex justify-between items-center">
              <div className="  flex gap-5 items-center">
                <div className="w-12 h-12 bg-light rounded-md text-xs flex items-center justify-center text-center">
                  user avatar
                </div>
                <span className="text-xs">Name</span>
              </div>
              <span className="font-bold text-sm px-4 py-2">+0.005</span>
            </div>
          </div>
        </div>
        <BottomTabs />
      </div>
    </div>
  );
};
