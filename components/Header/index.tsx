import HMenu from "./menu.svg";
import { BsCart as Cart } from "react-icons/bs";
import Search from "./Search";
import Link from "next/link";
import clsx from 'clsx';

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-2 p-4 m-auto max-w-7xl">
      <div className="flex items-center gap-4">
        <HMenu className="w-8" />
        <Search />
      </div>
      <Link
        href="/"
        className={clsx(
          "self-center text-center font-sans font-light text-3xl cursor-pointer",
          "hover:underline decoration-2 decoration-gray-600"
        )}
      >
        Librería Macondo
      </Link>
      <div className="flex items-center gap-4">
        <button className="font-sans font-medium text-gray-800">Account</button>
        <Cart />
      </div>
    </header>
  );
}
