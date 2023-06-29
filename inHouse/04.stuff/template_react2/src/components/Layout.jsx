import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div className="w-[100%] h-full pb-20 bg-gradient-to-r from-yellow-300 to-red-600">
      <Header />
      {children}
    </div>
  );
}
