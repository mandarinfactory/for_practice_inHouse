export default function Header() {
  return (
    <header className="text-gray-200 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-100 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="mr-20 text-3xl font-extrabold text-black drop-shadow-lg">무비써치</h1>
        <nav className="md:ml-auto my-5 flex flex-wrap items-center text-base justify-center">
          <a className="mr-20 text-2xl font-bold hover:text-white cursor-pointer drop-shadow-lg duration-200">추천영화</a>
          <a className="mr-10 text-2xl font-bold hover:text-white cursor-pointer drop-shadow-lg duration-200">로그인</a>
        </nav>
      </div>
    </header>
  );
}
 