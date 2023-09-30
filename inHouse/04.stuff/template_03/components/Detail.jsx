import Layout from "./Layout";
import DetailScreen from "../screens/DetailScreen";

export default function Detail({
  isAptPressed,
  setIsAptPressed,
  pressedAptData,
  pressedAptLocData,
}) {
  return (
    <Layout>
      <DetailScreen
        isAptPressed={isAptPressed}
        setIsAptPressed={setIsAptPressed}
        pressedAptData={pressedAptData}
        pressedAptLocData={pressedAptLocData}
      />
    </Layout>
  );
}
