const createMapMarkerBoxHandler = `
  <div class="w-full flex flex-row ">
    <div class="w-[50%] h-[80%] rounded-full bg-teal-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        class="p-3 fill-white"
      >
        <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
      </svg>
    </div>
    <div class="w-full bg-white">
      여기에는 TITLE!
    </div>
  </div>`;

export default createMapMarkerBoxHandler;
