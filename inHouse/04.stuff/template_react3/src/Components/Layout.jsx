import Header from "./Screens/Header";

export default function Layout({ childern }) {
  return (
    <>
      <Header />
      {childern}
    </>
  );
}
