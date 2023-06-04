import Hero from "@/components/home/hero";
import Animation from "@/components/home/animation";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
 
          <Hero />
          <Animation />
    </Layout>
  );
}
