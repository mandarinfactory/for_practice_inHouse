import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ inputData, setInputData, children }) {
  return (
    <>
      <Header inputData={inputData} setInputData={setInputData} />
      <div>{children}</div>
      <Footer />
    </>
  );
}
