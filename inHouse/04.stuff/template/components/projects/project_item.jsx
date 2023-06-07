import Image from "next/image";

export default function ProjectItem({ data }) {
  const ImgSrc = data.cover.file?.rul || data.cover.external.url;
  const projectTitle = data.properties.이름.title[0].plain_text;
  const projectStartPeriod = data.properties.WorkPeriod.date.start;
  const projectEndPeriod = data.properties.WorkPeriod.date.end;
  const projectTags = data.properties.태그.multi_select;
  const projectDesc = data.properties.Description.rich_text[0].text.content;
  const projectWebsite = data.properties.Website.url;
  const projectGitHubLink = data.properties.GitHub.url;

  return (
    <div className="project-card">
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
      <div className="p-4 flex flex-col w-full">
        <h1 className="my-5 text-3xl font-bold">{projectTitle}</h1>
        <h3>
          {projectStartPeriod} - {projectEndPeriod}
        </h3>
        <h3 className="mt-4 text-xl">{projectDesc}</h3>
        <a href={projectWebsite}>사이트 바로가기</a>
        <a href={projectGitHubLink}>GitHub 바로가기</a>
        <div className="flex items-start mt-3">
          {projectTags.map((theTag) => (
            <h3 className="w-30 px-3 py-2 mr-2 rounded-md bg-sky-300  dark:bg-sky-700" key={theTag.id}>{theTag.name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}
