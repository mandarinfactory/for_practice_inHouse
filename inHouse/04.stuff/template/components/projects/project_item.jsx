import Image from "next/image";

export default function ProjectItem({ data }) {
  const ImgSrc = data.cover.file?.rul || data.cover.external.url;
  const projectTitle = data.properties.이름.title[0].plain_text;
  const projectStartPeriod = data.properties.WorkPeriod.date.start;
  const projectEndPeriod = data.properties.WorkPeriod.date.end;
  const projectDesc = data.properties.Description.rich_text[0].text.content;
  const projectWebsite = data.properties.Website.url;
  const projectGitHubLink = data.properties.GitHub.url;

  return (
    <div className="flex flex-col m-3 bg-slate-700 rounded-xl">
      <Image
      className="rounded-t-xl"
      src={ImgSrc}
      alt="cover image"
      width="100"
      height="50"
      layout="responsive"
      objectFit="none"
      quality={100}
      />
      <h1>{projectTitle}</h1>
      <h3>
        {projectStartPeriod} - {projectEndPeriod}
      </h3>
      <h3>{projectDesc}</h3>
      <a href={projectWebsite}>사이트 바로가기</a>
      <a href={projectGitHubLink}>GitHub 바로가기</a>
    </div>
  );
}
