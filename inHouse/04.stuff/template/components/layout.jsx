import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <h1>레이아웃입니다.</h1>
      <div>{children}</div>
      <Footer />
    </div>
  );
};
