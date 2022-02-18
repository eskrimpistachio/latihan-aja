import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  getPathName,
  getDataOprec,
} from "../components/helpers/DataHelper";

const Before = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);

  useEffect(() => {
    document.title = dataOprec
      ? `${dataOprec.title[0]} ${dataOprec.title[1]}`
      : "Web Event Request BEM FILKOM 2022";
  }, [year, oprec]);

  return (
    <>
      {dataOprec ? (
        <>
          <section className="relative flex flex-col content-center h-full min-h-screen py-24 px-16 justify-center flex-grow overflow-y-hidden bg-coffeetint pattern-cloud">
            <header
              className="relative z-10 flex flex-col content-center justify-center flex-grow space-x-0 md:space-x-6 md:flex-row md:justify-center"
            >
              <div className="self-center text-center md:text-left">
                <h1
                  className="text-3xl text-center uppercase font-extrabold mt-4 md:mb-0 md:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-biru to-merah"
                >
                  <span>Alur & Tata</span><br/><span>Cara Pendaftaran</span>
                </h1>
                <div className="max-w-xl">
                  <div
                    className="flex flex-col justify-center md:justify-start text-md leading-snug tracking-tighter text-gray-900 mt-5 ml-1 space-y-6"
                  >
                    {dataOprec.alur.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col p-4 text-gray-100 rounded-lg bg-merahmuda shadow-md transition ease-linear"
                        >
                          {item.hasOwnProperty("description") ? (
                            <span className="font-semibold">
                              {item.description}
                            </span>
                          ) : (
                            <></>
                          )}
                          {item.hasOwnProperty("note") ? (
                            <p>{item.note}</p>
                          ) : (
                            <></>
                          )}
                          {item.hasOwnProperty("link") ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold text-center py-2 px-4 bg-green-700 text-gray-100 rounded-lg shadow-md hover:bg-gray-200 hover:text-merahmuda transition ease-linear focus:outline-none mt-2"
                              tabIndex="-1"
                            >
                              {item.titleLink}
                            </a>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                    <div className="flex flex-col content-center justify-center mt-8">
                      <Link
                        to={pathname + "/login"}
                        className="text-center py-4 px-6 text-2xl font-semibold bg-gradient-to-r bg-kuning text-gray-100 rounded-full shadow-md hover:from-gray-50 hover:to-gray-300  hover:text-merahmuda transition ease-linear focus:outline-none"
                        tabIndex="-1"
                      >
                        Daftar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </section>
        </>
      ) : (
        <>
          <section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-coffeetint">
            <div className="self-center max-w-5xl text-4xl text-center text-kuning font-bold">
              Halaman Tidak Ditemukan
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Before;
