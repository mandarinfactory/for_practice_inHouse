import Layout from "./Layout";
import DetailScreen from "../screens/DetailScreen";

export default function Detail ({isAptPressed}) {
    return (
        <Layout>
            <DetailScreen isAptPressed={isAptPressed}/>
        </Layout>
    )
}