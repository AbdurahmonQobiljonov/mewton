import { useState } from 'react';
import bgImage from '../assets/bg.png';
import { BottomTabs } from '../components/bottom-tabs';
import { Coin } from '../components/coin';
export const Main = () => {
  const [points, setPoints] = useState(22749365);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const pointsToAdd = 11;

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = '';
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  return (
    <div className="bg-welcomeBg flex justify-center font-sans ">
      <div className="w-full text-white h-screen font-bold flex flex-col max-w-xl py-10">
        <img className="absolute opacity-20" src={bgImage} alt="" />
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
        <div className="flex-1 mx-auto my-10">
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-gray rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs">0.00</span>
            </div>
            <div className="bg-gray w-[105px] h-[55px] rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs">0.00</span>
            </div>
            <div className="bg-gray w-[105px] h-[55px] rounded-md flex flex-col items-center justify-between p-2">
              <span className="text-xs">total earned</span>
              <span className="text-xs">0.00</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between mt-14 gap-5">
            <h1 className="text-3xl">1000</h1>
            <Coin onClick={handleCardClick} />
            <div className="flex justify-between w-2/3">
              <span>430/1000</span>
              <span>0</span>
            </div>
          </div>
        </div>
        <BottomTabs />
      </div>
      {clicks.map((click) => (
        <div
          key={click.id}
          className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
          style={{
            top: `${click.y - 42}px`,
            left: `${click.x - 28}px`,
            animation: `float 1s ease-out`,
          }}
          onAnimationEnd={() => handleAnimationEnd(click.id)}
        >
          {pointsToAdd}
        </div>
      ))}
    </div>
  );
};
