import Layout from "@/components/layout";
import Head from "next/head";
import { DATABASE_ID, TOKEN } from "@/config";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>이호준의 포트폴리오</title>
        <meta name="description" content="이호준의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projects.results.length}</h1>

      {projects.results.map((theProject) => (
        <h1>{theProject.properties.이름.title[0].plain_text}</h1>
      ))}
    </Layout>
  );
}

//build-time에 호출되서 data를 가지고 온 후에 화면에 나타낸다.
export async function getStaticProps(context) {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ 
        sorts: [
            {
                "property": "이름",
                "direction" : "ascending"
            }/* data들의 순서를 지정할수 있다. property --> 순서의 기준, ascending은 오름차순, descending은 내림차순 */
        ],
        page_size: 100 
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    props: { projects },
  };
}
