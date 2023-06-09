import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <section className="flex min-h-screen felx-col items-center justify-center text-gray-600 body-font  animation_fadeUp">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-4xl mb-4 font-black text-gray-900 leading-snug">
            일관성 있는 <br />
            배움의 자세를 통해 <br />
            성장하는 개발자 <br/>
            이호준이라고 합니다. <br />
          </h1>
          <p className="mb-8 leading-relaxed text-lg">
            하늘같이 높고 넓은 사람이 되라는 이름처럼 <br />
            항상 깊고 많은 호기심을 갖고 개발하고 있습니다. <br />
          </p>
          <div className="flex justify-center">
            <Link legacyBehavior href="/projects">
              <a className="inline-flex text-white hover:text-white dark:text-white bg-indigo-700 hover:bg-fuchsia-700 border-0 py-2 px-6 focus:outline-none rounded text-lg duration-200">
                프로젝트 보러가기
              </a>
            </Link>
          </div>
        </div>
          <Animation />
      </div>
    </section>
  );
}