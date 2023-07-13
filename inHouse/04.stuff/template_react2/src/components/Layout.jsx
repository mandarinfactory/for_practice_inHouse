import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div className="w-full h-full pb-[500px] bg-gradient-to-r from-yellow-400 to-blue-500">
      <Header />
      {children}
    </div>
  );
}
