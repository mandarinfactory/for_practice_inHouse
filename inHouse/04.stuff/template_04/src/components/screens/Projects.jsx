import { useRef, useEffect } from "react";
import style from "../style/frame.module.css";

export default function Project() {
  const frameRef = useRef(null);
  const cardRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    let { x, y, width, height } = frameRef.current.getBoundingClientRect();
    const mouseMove = (e) => {
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

    frameRef.current.addEventListener("mouseenter", () => {
      frameRef.current.addEventListener("mousemove", mouseMove);
    });
    frameRef.current.addEventListener("mouseleave", () => {
      frameRef.current.addEventListener("mousemove", mouseMove);
      cardRef.current.style.boxShadow = "";
      cardRef.current.style.transform = "";
      lightRef.current.style.backgroundImage = "";
    });

    window.addEventListener("resize", () => {
      const rect = frameRef.current.getBoundingClientRect();
      x = rect.x;
      y = rect.y;
      width = rect.width;
      height = rect.height;
    });
  }, []);

  return (
    <>
      <section className="flex min-h-screen items-center justify-center text-gray-600 body-font dark:bg-slate-800 dark:text-gray-300">
        <div className={`frame ${style.frame}`} ref={frameRef}>
          <div
            className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
            ref={cardRef}
          >
            <div
              className="light absolute w-full h-full rounded-lg"
              ref={lightRef}
            >
              <a href="https://react-moviesearch-30490.web.app" className="block w-full h-full m-10 text-4xl text-black" target="blank">무비써치</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
