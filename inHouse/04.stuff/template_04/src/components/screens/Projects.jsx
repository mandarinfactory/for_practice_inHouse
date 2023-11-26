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
    //windowResize(frame1Ref);

    attachMouseEvents(frame2Ref, card2Ref, light2Ref);
    //windowResize(frame2Ref);

    attachMouseEvents(frame3Ref, card3Ref, light3Ref);
    //windowResize(frame3Ref);
  }, []);

  return (
    <section className="flex lg:flex-row md:flex-col sm:flex-col min-h-screen items-center justify-center text-gray-600 body-font dark:bg-slate-800 dark:text-gray-300">
      <div
        className={`frame ${style.frame} lg:mr-20 md:mr-20 sm:mr-0`}
        ref={frame1Ref}
      >
        <div
          className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-red-600 to-yellow-500 bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
          ref={card1Ref}
        >
          <div
            className="light absolute w-full h-full rounded-2xl"
            ref={light1Ref}
          >
            <div className="pl-10">
              <p className="block mt-10 mb-5 text-4xl text-white">무비써치</p>
              <p className="text-white">사용언어</p>
              <p className="w-[80%] py-2 my-2 text-xl bg-white text-black text-center rounded-lg">
                바닐라JS, ReactJS, tailwindCSS
              </p>
            </div>
            <a
              href="https://github.com/mandarinfactory/react_movieSearch"
              target="blank"
              title="깃헙홈페이지"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3em"
                viewBox="0 0 496 512"
                className="absolute bottom-[15%] right-7 cursor-pointer fill-white hover:fill-gray-800 duration-100"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              href="https://react-moviesearch-30490.web.app"
              target="blank"
              title="홈페이지"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3em"
                viewBox="0 0 512 512"
                className="absolute bottom-10 right-7 cursor-pointer fill-white hover:fill-gray-800 duration-100"
              >
                <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`frame ${style.frame} lg:mr-20 md:mr-20 sm:mr-0`}
        ref={frame2Ref}
      >
        <div
          className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-teal-600 to-slate-500 bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
          ref={card2Ref}
        >
          <div
            className="light absolute w-full h-full rounded-2xl"
            ref={light2Ref}
          >
            <div className="pl-10">
              <p className="block mt-10 mb-5 text-4xl text-white">동네지도</p>
              <p className="text-white">사용언어</p>
              <p className="w-[80%] py-2 my-2 text-xl bg-white text-black text-center rounded-lg">
                바닐라JS, ReactJS, tailwindCSS
              </p>
              <a
                href="https://github.com/mandarinfactory/react_myLocalMap"
                target="blank"
                title="깃헙홈페이지"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 496 512"
                  className="absolute bottom-[15%] right-7 cursor-pointer fill-white hover:fill-gray-800 duration-100"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                href="https://react-mylocalmap.web.app/"
                target="blank"
                title="홈페이지"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3em"
                  viewBox="0 0 512 512"
                  className="absolute bottom-10 right-7 cursor-pointer fill-white hover:fill-gray-800 duration-100"
                >
                  <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`frame ${style.frame} lg:mr-20 md:mr-20 sm:mr-0`}
        ref={frame3Ref}
      >
        <div
          className="card relative w-full h-full rounded-2xl bg-gradient-to-r from-indigo-700 to-black bg-center bg-no-repeat shadow-lg duartion-200 transition-all ease-out"
          ref={card3Ref}
        >
          <div
            className="light absolute w-full h-full rounded-2xl"
            ref={light3Ref}
          >
            <div className="pl-10">
              <p className="block mt-10 mb-5 text-4xl text-white">집순위</p>
              <p className="text-white">사용언어</p>
              <p className="w-[90%] py-2 my-2 text-xl bg-white text-black text-center rounded-lg">
                바닐라JS, ReactNative, tailwindCSS
              </p>
              <a
              href="https://github.com/mandarinfactory/reactNative_realEstate"
              target="blank"
              title="깃헙홈페이지"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3em"
                viewBox="0 0 496 512"
                className="absolute bottom-[15%] right-7 cursor-pointer fill-white hover:fill-gray-500 duration-100"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            <a
              href="#"
              target="blank"
              title="홈페이지"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="3em"
                viewBox="0 0 512 512"
                className="absolute bottom-10 right-7 cursor-pointer fill-white hover:fill-gray-500 duration-100"
              >
                <path d="M0 256C0 209.4 12.47 165.6 34.27 127.1L144.1 318.3C166 357.5 207.9 384 256 384C270.3 384 283.1 381.7 296.8 377.4L220.5 509.6C95.9 492.3 0 385.3 0 256zM365.1 321.6C377.4 302.4 384 279.1 384 256C384 217.8 367.2 183.5 340.7 160H493.4C505.4 189.6 512 222.1 512 256C512 397.4 397.4 511.1 256 512L365.1 321.6zM477.8 128H256C193.1 128 142.3 172.1 130.5 230.7L54.19 98.47C101 38.53 174 0 256 0C350.8 0 433.5 51.48 477.8 128V128zM168 256C168 207.4 207.4 168 256 168C304.6 168 344 207.4 344 256C344 304.6 304.6 344 256 344C207.4 344 168 304.6 168 256z" />
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
