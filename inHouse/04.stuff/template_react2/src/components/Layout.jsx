import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-yellow-400 to-blue-500">
      <Header />
      {children}
    </div>
  );
}
