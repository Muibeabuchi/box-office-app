import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="flex items-center justify-between w-full max-w-6xl px-3 py-3 mx-auto bg-transparent bg-white">
        <Link to="/">
          <img
            src="/android-chrome-192x192.png"
            alt="header link"
            className="w-[50px] h-[50px] object-contain"
          />
        </Link>
        <Link to="/favorites" className="flex items-center">
          <MdFavorite className="text-blue-800" />
          <p className="font-semibold text-gray-600 hover:underline lg:text-[18px] text-[14px]">
            Favorites
          </p>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
