import Header from "./screen/Header";

export default function Layout({ children }) {
  return (
    <div  className="w-[100%] h-full bg-gradient-to-r from-slate-600 to-red-600">
      <Header />
      {children}
    </div>
  );
}
