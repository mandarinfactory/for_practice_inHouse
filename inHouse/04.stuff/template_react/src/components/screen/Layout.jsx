import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ setCoordinates, children }) {
  return (
    <>
      <Header setCoordinates={setCoordinates}/>
      {children}
      <Footer />
    </>
  );
}
