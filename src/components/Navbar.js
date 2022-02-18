import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CheckUser, invalidateSession } from "./helpers/SessionHelper";
import { getPathName } from "./helpers/DataHelper";

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  let pathname = getPathName(useLocation().pathname);

  return (
    <nav
      className="fixed top-0 w-full h-auto md:h-14 z-50 flex flex-col content-center justify-center px-12 py-3 bg-biru pattern-aztec"
      style={{
        boxShadow: "0 4px 14px 3px rgb(0 0 0 / 40%)",
      }}
    >
      <div className="self-center flex flex-col md:space-y-0 md:flex-row content-center justify-between flex-grow w-full max-w-5xl">
        <Link
          to={pathname}
          className="hidden md:flex self-center text-md md:text-2xl font-semibold leading-relaxed text-shadow-md text-white text-center md:text-left"
        >
          BEM FILKOM 2022
        </Link>
        <button
          onClick={() => setMenu(!showMenu)}
          className="md:hidden text-center font-bold py-1 px-3 bg-merah text-white rounded-lg shadow-md focus:outline-none"
          tabIndex="-1"
        >
          Menu
        </button>
        <div
          onClick={() => setMenu(false)}
          className={`${showMenu ? "flex" : "hidden"
            } flex-wrap md:flex flex-row mt-2 md:mt-0 content-center justify-center text-md tracking-tight leading-relaxed text-justify text-white space-x-2`}
        >
          <HashLink smooth
            to={pathname + "#beranda"}
            className="font-bold py-1 px-3 text-white hover:text-merahmuda transition ease-linear focus:outline-none"
            tabIndex="-1"
          >
            Beranda
          </HashLink>
          <HashLink smooth
            to={pathname + "#tentang"}
            className="font-bold py-1 px-3 text-white hover:text-merahmuda transition ease-linear focus:outline-none"
            tabIndex="-1"
          >
            Tentang
          </HashLink>
          <HashLink smooth
            to={pathname + "#linimasa"}
            className="font-bold py-1 px-3 text-white hover:text-merahmuda transition ease-linear focus:outline-none"
            tabIndex="-1"
          >
            Linimasa
          </HashLink>
          <CheckUser forLoggedOut>
            <Link
              to={pathname + "/notice"}
              className="font-bold py-1 px-6 bg-gradient-to-r bg-kuning text-white rounded-full shadow-md hover:from-gray-50 hover:to-gray-300  hover:text-merahmuda transition ease-linear focus:outline-none"
              tabIndex="-1"
            >
              Daftar
            </Link>
          </CheckUser>
          <CheckUser>
            <button
              onClick={() => {
                invalidateSession();
                window.location.reload();
              }}
              className="font-bold py-1 px-6 bg-gradient-to-r bg-kuning text-white rounded-full shadow-md hover:from-gray-50 hover:to-gray-300  hover:text-merahmuda transition ease-linear focus:outline-none"
              tabIndex="-1"
            >
              Keluar
            </button>
          </CheckUser>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
