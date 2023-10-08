export default function MapMarkerBox() {
  return (
    <div>
      <div className="w-[10%] h-[10%] bg-white rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="p-3 fill-teal-300"
        >
          <path d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z" />
        </svg>
      </div>
      <div>과연 이box를 marker로?!</div>
    </div>
  );
}
