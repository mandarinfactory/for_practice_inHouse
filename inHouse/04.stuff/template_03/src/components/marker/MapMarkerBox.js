function createMapMarkerBox(title, key) {
  return `
  <div class="marker-${key} w-full flex flex-row justify-center items-center border-2 border-black rounded-full shadow-sm">
      <div class="p-1 w-auto flex flex-row justify-center items-center bg-white rounded-full">
        <div class="w-[35px] h-[35px] flex flex-row items-center rounded-full bg-teal-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="p-3 fill-white"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
          </svg>
        </div>
        <h1 class="mx-3 text-lg" data-num=${key}>${title}</h1>
        <div class="messageBubble">
        </div>
      </div>
    </div>
    <style type="text/css">
      .messageBubble:before {
        content:"";
        position: absolute;
        right: 46px;
        top: 43px; 
        border-left: 8px solid transparent; 
        border-right: 8px solid transparent; 
        border-top: 10px solid white;
        z-index: 0;
      }
      .messageBubble:after {
        content:"";
        position: absolute;
        right: 45px;
        top: 45px; 
        border-left: 9px solid transparent; 
        border-right: 9px solid transparent; 
        border-top: 11px solid black;
        z-index: -1;
      }
    </style>
  `;
}

export default createMapMarkerBox;
