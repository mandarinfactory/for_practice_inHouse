import Layout from "./Layout";
import DetailScreen from "../screens/DetailScreen";

export default function Detail({
  isAptPressed,
  setIsAptPressed,
  pressedAptData,
}) {
  return (
    <Layout>
      <DetailScreen
        isAptPressed={isAptPressed}
        setIsAptPressed={setIsAptPressed}
        pressedAptData={pressedAptData}
      />
    </Layout>
  );
}
