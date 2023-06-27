import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div  className="w-[100%] h-[1200px] bg-gradient-to-r from-orange-500 to-blue-500">
      <Header />
      {children}
    </div>
  );
}
