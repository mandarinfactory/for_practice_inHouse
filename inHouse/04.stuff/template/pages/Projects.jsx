import Layout from "@/components/layout";

export default function Projects() {
  return (
    <Layout>
      <h1>프로젝트입니다.</h1>
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
      "Authoriztion"
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  fetch("https://api.notion.com/v1/databases/database_id/query", options)

  return {
    props: {},
  };
}
