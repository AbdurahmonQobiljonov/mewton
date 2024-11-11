import { BottomTabs } from '../components/bottom-tabs';
export const Wallet = () => {
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
          <div className="flex justify-between items-center">
            <h1 className="text-2xl mb-2 ">Wallet</h1>
            <span className="bg-gray rounded-xl font-medium text-xs px-4 py-2">Connect wallet</span>
          </div>
          <div className="flex justify-between mt-10">
            <h2 className="text-4xl font-bold">0.00</h2>
            <div className="bg-gray w-[105px] h-[55px] rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs">0.00</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-2/5">
            <button className="bg-primary rounded-xl font-medium text-xs px-4 py-2">Top up</button>
            <button className="bg-orange rounded-xl font-medium text-xs px-4 py-2">withdraw</button>
          </div>
          <div className="w-full h-[3px] bg-gray my-10" />
          <div className="flex flex-col gap-3">
            <p className="text-xs text-textColor">
              *all cash withdrawals are made automatically and arrive to the linked wallet instantly
            </p>
            <p className="text-xs text-textColor">
              **we also retain a 3% commission for the functioning of the ecosystem
            </p>
          </div>
        </div>
        <BottomTabs />
      </div>
    </div>
  );
};
