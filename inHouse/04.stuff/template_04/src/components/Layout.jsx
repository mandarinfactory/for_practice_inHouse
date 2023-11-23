import Header from "./screens/Header";
import Footer from "./screens/Footer";

export default function Layout({ isDarkMode, setIsDarkMode, children }) {
  return (
    <>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      {children}
      <Footer />
    </>
  );
}
