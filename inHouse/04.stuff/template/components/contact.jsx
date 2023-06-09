export default function ContactMenu({ setMenuIsOpen }) {
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="absolute w-50 h-64 bg-slate-500 animate-fade animate-duration-500" onClick={closeMenu}>
      <h1>이것이 Contact????????!!!!!!!</h1>
    </div>
  );
}
 