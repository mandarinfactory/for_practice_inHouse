import Hero from "./components/Hero";
import Layout from "./components/Layout";
import { useState } from "react";

export default function App() {
  const [inputData, setInputData] = useState("");
  return (
    <Layout inputData={inputData} setInputData={setInputData}>
      <Hero setInputData={setInputData} />
    </Layout>
  );
}
