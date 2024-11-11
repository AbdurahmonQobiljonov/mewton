export const WelcomeBottom = () => {
  return (
    <div className="px-4 mt-10 flex flex-col gap-4 mb-3">
      <div className="flex justify-center gap-5">
        <div className="h-[3px] w-[70px] bg-orange"></div>
        <div className="h-[3px] w-[70px] bg-orange"></div>
        <div className="h-[3px] w-[70px] bg-orange"></div>
      </div>
      <button className="bg-orange w-full h-12 rounded-xl font-medium text-lg font-sans">
        Next
      </button>
    </div>
  );
};
