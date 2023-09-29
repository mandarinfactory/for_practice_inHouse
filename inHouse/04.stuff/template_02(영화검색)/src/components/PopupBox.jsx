export default function PopupBox({ children, onClick }) {
  return (
    <div
      className="absolute top-[35%] lg:w-[25%] md:w-[30%] sm:w-[35%] h-[20%] flex flex-col justify-center items-center bg-slate-100 shadow-2xl rounded-lg cursor-pointer hover:bg-gradient-to-r from-yellow-400 to-red-400 z-20"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
