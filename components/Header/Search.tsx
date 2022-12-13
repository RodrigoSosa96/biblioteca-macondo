import clsx from "clsx";
import { useRef, useState } from "react";
import SearchIcon from "./search.svg";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={clsx(
        "relative mx-2 flex items-center justify-center bg-white "
      )}
    >
      <button
        className={clsx(
          "relative z-10 px-2 py-2",
          isOpen && "pointer-events-none"
        )}
        onClick={() => {
          setIsOpen((prev) => !prev);
          if (!isOpen) {
            inputRef.current?.focus();
          }
        }}
      >
        <SearchIcon />
      </button>
      <input
        className={clsx(
          "absolute top-0 left-12 z-0 h-full bg-transparent",
          "w-0 p-0 text-md ease-in-out duration-100",
          "outline-none focus:outline-none:focus",
          isOpen && "w-80 border-b"
        )}
        onBlur={() => setIsOpen(false)}
        ref={inputRef}
        type="search"
        autoComplete="off"
        spellCheck="false"
        aria-live="polite"
        placeholder="Nombre, Autor, ISBN"
      />
    </div>
  );
}
