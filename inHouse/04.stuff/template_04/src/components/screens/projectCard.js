const handleMouseMove = (frameRef, cardRef, lightRef) => (e) => {
  let { x, y, width, height } = frameRef.current.getBoundingClientRect();
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
  const windowResize = (frameRef) => {
    window.addEventListener("resize", () => {
      const rect = frameRef.current.getBoundingClientRect();
      if (rect !== undefined) {
        x = rect.x;
        y = rect.y;
        width = rect.width;
        height = rect.height;
      }
    });
  };
  windowResize(frameRef);
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

export { handleMouseMove, attachMouseEvents };
