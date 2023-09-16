import HeaderScreen from "../screens/HeaderScreen";

export default function Layout({ children }) {
  return (
    <>
      <HeaderScreen />
      {children}
    </>
  );
}
