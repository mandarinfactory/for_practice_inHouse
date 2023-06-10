import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
      <div className="">
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    );
  };