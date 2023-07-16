export default function Header() {
  return (
    <header className="p-2 w-full h-auto text-gray-200 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-gray-100 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <h1 className="mr-20 text-3xl font-extrabold text-black drop-shadow-lg">
          <a href="./"> 무비써치</a>
        </h1>
      </div>
    </header>
  );
}
