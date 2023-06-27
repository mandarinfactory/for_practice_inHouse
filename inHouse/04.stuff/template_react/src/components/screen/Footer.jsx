export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-slate-100">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl font-bold">관광정보알리미</span>
        </a>
          <a
            href="https://knto.or.kr/index"
            className="text-gray-600 ml-5"
            rel="noopener noreferrer"
            target="_blank"
          >
            한국관광공사
          </a>
      </div>
    </footer>
  );
}
