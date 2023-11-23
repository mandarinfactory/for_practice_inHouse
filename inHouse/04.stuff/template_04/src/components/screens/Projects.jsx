import { useRef, useEffect } from "react";
import style from "../style/frame.module.css";

export default function Project() {
  const frame1Ref = useRef(null);
  const card1Ref = useRef(null);
  const light1Ref = useRef(null);

  const frame2Ref = useRef(null);
  const card2Ref = useRef(null);
  const light2Ref = useRef(null);

  const frame3Ref = useRef(null);
  const card3Ref = useRef(null);
  const light3Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (frameRef, cardRef, lightRef) => (e) => {
      const { x, y, width, height } = frameRef.current.getBoundingClientRect();
      const left = e.clientX - x;
      const top = e.clientY - y;
      const centerX = left - width / 2;
      const centerY = top - height / 2;
      const d = Math.sqrt(centerX ** 2 + centerY ** 2);

      cardRef.current.style.boxShadow = `
        ${-centerX / 10}px ${-centerY / 10}px 10px rgba(0,0,0,0.2)
      `;
      cardRef.current.style.transform = `
        rotate3d(
          ${-centerY / 100}, ${centerX / 100}, 0, ${d / 10}deg
        )
      `;
      lightRef.current.style.backgroundImage = `
        radial-gradient(
          circle at ${left}px ${top}px, #00000010, #ffffff00, #ffffff70
        )
      `;
    };

    const attachMouseEvents = (frameRef, cardRef, lightRef) => {
      frameRef.current.addEventListener("mouseenter", () => {
        frameRef.current.addEventListener(
          "mousemove",
          handleMouseMove(frameRef, cardRef, lightRef)
        );
      });
      frameRef.current.addEventListener("mouseleave", () => {
        frameRef.current.removeEventListener(
          "mousemove",
          handleMouseMove(frameRef, cardRef, lightRef)
        );
        cardRef.current.style.boxShadow = "";
        cardRef.current.style.transform = "";
        lightRef.current.style.backgroundImage = "";
      });
    };

    const windowResize = (frameRef) => {
      window.addEventListener("resize", () => {
        const rect = frameRef.current.getBoundingClientRect();
        x = rect.x;
        y = rect.y;
        width = rect.width;
        height = rect.height;
      });
    };

    attachMouseEvents(frame1Ref, card1Ref, light1Ref);
    windowResize(frame1Ref);

    attachMouseEvents(frame2Ref, card2Ref, light2Ref);
    windowResize(frame2Ref);

    attachMouseEvents(frame3Ref, card3Ref, light3Ref);
    windowResize(frame3Ref);
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center text-gray-600 body-font dark:bg-slate-800 dark:text-gray-300">
      <div className={`frame ${style.frame} mr-20`} ref={frame1Ref}>
        <div
          className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
          ref={card1Ref}
        >
          <div
            className="light absolute w-full h-full rounded-2xl"
            ref={light1Ref}
          >
            <a
              href="https://react-moviesearch-30490.web.app"
              className="block w-full h-full m-10 text-4xl text-black"
              target="blank"
            >
              무비써치
            </a>
          </div>
        </div>
      </div>
      <div className={`frame ${style.frame} mr-20`} ref={frame2Ref}>
        <div
          className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-teal-600 to-gray-500 bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
          ref={card2Ref}
        >
          <div
            className="light absolute w-full h-full rounded-2xl"
            ref={light2Ref}
          >
            <a
              href="https://react-mylocalmap.web.app/"
              className="block w-full h-full m-10 text-4xl text-black"
              target="blank"
            >
              동네지도
            </a>
          </div>
        </div>
      </div>
      <div className={`frame ${style.frame}`} ref={frame3Ref}>
        <div
          className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-indigo-700 to-black bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
          ref={card3Ref}
        >
          <div
            className="light absolute w-full h-full rounded-2xl"
            ref={light3Ref}
          >
            <a
              href="https://react-moviesearch-30490.web.app"
              className="block w-full h-full m-10 text-4xl text-black"
              target="blank"
            >
              집순위
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
