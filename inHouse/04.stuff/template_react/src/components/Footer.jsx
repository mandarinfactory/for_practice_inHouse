export default function Footer() {
  return (
    <footer className="text-gray-600 body-font bg-gray-200">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">관광명소알리미</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          <a
            href="https://knto.or.kr/index#"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            © 2023 한국관광공사
          </a>
        </p>
      </div>
    </footer>
  );
}
