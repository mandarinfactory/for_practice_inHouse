import Layout from "@/components/layout";
import Head from "next/head";
import { DATABASE_ID, TOKEN } from "@/config";
import ProjectItem from "@/components/projects/project_item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 py-15 mb-10">
        <Head>
          <title>이호준의 포트폴리오</title>
          <meta name="description" content="이호준의 포트폴리오" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-5xl font-bold">
          총 프로젝트 : 
          <span className="pl-4 text-indigo-600">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8 sm:w-full">
          {projects.results.map((theProject) => (
            <>
              <ProjectItem key={theProject.id} data={theProject} />
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

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
          property: "이름",
          direction: "ascending",
        } /* data들의 순서를 지정할수 있다. property --> 순서의 기준, ascending은 오름차순, descending은 내림차순 */,
      ],
      page_size: 100,
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
