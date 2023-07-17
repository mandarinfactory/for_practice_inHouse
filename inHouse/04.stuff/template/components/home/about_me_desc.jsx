import Image from "next/image";
import profilePic from "../../public/me.JPG"

export default function AboutMeDescription() {
  return (
    <div className="container mx-auto px-5 flex flex-row items-center justify-center animation_fadeUp">
      <section className="flex-1 box-border">
        <h2 className="text-3xl py-20 font-extrabold text-gray-900 leading-relaxed">
          몇번이고 벽을 만나 부딪힌 적도, 힘든적도 많지만, <br />
          직접 코딩을 통해 나오는 결과에 성취감을 느끼고 <br />
          새로운것을 배움에 있어 즐거움이 항상 생깁니다. <br />
          깃헙에 주중 한 commit을 하는 습관을 꾸준하게 유지하며, <br />늘
          안주하지 않기 위해 노력하고 있습니다.
        </h2>
        <h4 className="text-2xl py-3 font-extrabold text-gray-800">Technical</h4>
        <p className="text-xl py-10 text-gray-600 leading-loose">
          국비교육을 통해 HTML5, CSS3, Sass, JavaScript(jQuery, ECMA6)을 배웠으며, <br />
          배운것을 바탕으로 웹페이지를 만드는 project 했습니다. <br />
          교육후 독학으로 library인 react도 공부하여 이에 따른 project들도 만들었습니다. <br />
          또한, Next JS, React Native, <br />
          그리고 깊이있게 JavaScript, 기초적인 TypeScript를 공부하고 있습니다.
        </p>
        <h4 className="text-2xl py-3 font-extrabold text-gray-800">Personal</h4>
        <p className="text-xl py-10 text-gray-600 leading-loose">
          저는 현재 29살이고 지난 15년부터 20년까지 군복무를 제외하고 <br />
          4년동안 유니클로(현대백화점 중동점, 여의도 IFC몰점)에서 근무했으며, <br />
          20년도 하반기부터 22년도 6월까지 AONE 북부감평법인에서 일했습니다. 금년에 퇴사후, <br />
          바로 더조은컴퓨터학원 부평지점에서 웹퍼블리셔 3개월과정을 <br />
          수료했습니다. (22.10.17 ~ 23.02.17)
        </p>
      </section>
      <section className="flex-1">
        <Image
          className="t-xl box-border p-10"
          src={profilePic}
          alt="me image"
          layout="responsive"
        />
      </section>
    </div>
  );
}
