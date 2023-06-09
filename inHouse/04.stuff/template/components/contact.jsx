export default function ContactMenu({ setMenuIsOpen }) {
  const closeMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className="absolute top-20 right-10 w-50 h-64 bg-slate-500 animate-fade-down" onClick={closeMenu}>
      <h1>이것이 Contact????????!!!!!!!</h1>
    </div>
  );
}
 