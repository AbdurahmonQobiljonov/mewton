import { BottomTabs } from '../components/bottom-tabs';
export const Boost = () => {
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
        <div className="flex-1 mx-auto my-10 w-4/5 flex flex-col items-center">
          <div className="flex flex-col items-center gap-7">
            <h1 className="text-3xl">1000</h1>
            <button className="bg-orange w-full h-12 rounded-xl font-medium text-lg font-sans ">
              Top up balance
            </button>
            <span className="text-3xl">Boosts</span>
          </div>
          <span className="text-[10px] my-4">
            boost can be purchased again only after some time
          </span>
          <div className="grid grid-cols-2 gap-3 overflow-auto max-h-[45vh] px-2">
            <div className="h-[175px] w-[145px] bg-cardBg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Loki</span>
                <span className="text-sm">2000</span>
              </div>
              <button className="bg-orange w-full rounded-lg p-1 font-medium  font-sans text-base">
                Buy <span className="text-xs">+0.01</span>
              </button>
            </div>
            <div className="h-[175px] w-[145px] bg-cardBg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Loki</span>
                <span className="text-sm">2000</span>
              </div>
              <button className="bg-orange w-full rounded-lg p-1 font-medium  font-sans text-base">
                Buy <span className="text-xs">+0.01</span>
              </button>
            </div>
            <div className="h-[175px] w-[145px] bg-cardBg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Loki</span>
                <span className="text-sm">2000</span>
              </div>
              <button className="bg-orange w-full rounded-lg p-1 font-medium  font-sans text-base">
                Buy <span className="text-xs">+0.01</span>
              </button>
            </div>
            <div className="h-[175px] w-[145px] bg-cardBg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Loki</span>
                <span className="text-sm">2000</span>
              </div>
              <button className="bg-orange w-full rounded-lg p-1 font-medium  font-sans text-base">
                Buy <span className="text-xs">+0.01</span>
              </button>
            </div>
            <div className="h-[175px] w-[145px] bg-cardBg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Loki</span>
                <span className="text-sm">2000</span>
              </div>
              <button className="bg-orange w-full rounded-lg p-1 font-medium  font-sans text-base">
                Buy <span className="text-xs">+0.01</span>
              </button>
            </div>
            <div className="h-[175px] w-[145px] bg-cardBg rounded-lg p-4 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <span className="text-sm">Loki</span>
                <span className="text-sm">2000</span>
              </div>
              <button className="bg-orange w-full rounded-lg p-1 font-medium  font-sans text-base">
                Buy <span className="text-xs">+0.01</span>
              </button>
            </div>
          </div>
        </div>
        <BottomTabs />
      </div>
    </div>
  );
};
