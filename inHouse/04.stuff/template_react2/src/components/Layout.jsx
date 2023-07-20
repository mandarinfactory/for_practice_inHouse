import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center w-full h-full bg-gradient-to-r from-yellow-400 to-red-600">
      <Header />
      {children}
    </div>
  );
}
