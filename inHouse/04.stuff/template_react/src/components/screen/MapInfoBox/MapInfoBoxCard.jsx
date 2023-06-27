export default function MapInfoBoxCard({ place, selected, refProp }) {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="m-7 bg-slate-100 shadow-lg">
      <img
        className="p-3"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
        }
        alt=""
      />
      <h1 className="px-10 py-5 text-2xl font-bold bg-green-300">
        {place.name}
      </h1>
      <p className="flex justify-between px-10 py-3 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 384 512"
        >
          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
        {place.address}
      </p>
      <p className="flex justify-between px-10 py-5 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1.5em"
          viewBox="0 0 512 512"
        >
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
        </svg>
        {place.phone}
      </p>
      <div className="flex justify-between p-3">
        <p className="mr-3 text-lg font-bold">평가</p>
        <p>{place.ranking}</p>
      </div>
      <button
        className="m-3 p-2 bg-slate-300 font-bold rounded-lg hover:bg-green-300 duration-200"
        onClick={() => window.open(place.web_url, "_blank")}
      >
        트립어드바이저
      </button>
      <button
        className="m-3 p-2 bg-slate-300 font-bold rounded-lg hover:bg-green-300 duration-200"
        onClick={() => window.open(place.write_review)}
      >
        리뷰쓰기
      </button>
    </div>
  );
}
