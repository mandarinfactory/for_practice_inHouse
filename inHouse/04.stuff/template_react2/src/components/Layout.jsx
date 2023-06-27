import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div  className="w-[100%] h-[950px] bg-gradient-to-r from-yellow-500 to-blue-500">
      <Header />
      {children}
    </div>
  );
}
