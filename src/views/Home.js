import { HashLink as Link } from "react-router-hash-link";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router";
import { getDataOprec, getPathName } from "../components/helpers/DataHelper";

const Home = () => {
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
          <section
            id="beranda"
            className="relative flex flex-col content-center justify-center flex-grow h-screen min-h-full overflow-hidden bg-fixed bg-coffeetint"
            style={{
              backgroundImage: `url(${dataOprec.landingImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          >
            <div className="relative flex flex-col content-center justify-center flex-grow bg-white bg-opacity-60">
              <header className="relative z-10 flex flex-col content-center justify-center flex-grow h-full min-h-screen p-16 space-x-0 md:space-x-6 md:flex-row md:justify-center">
                <img
                  className="self-center pt-4 md:p-0 md:h-64 md:ml-6"
                  src={dataOprec.logo}
                  alt="Logo"
                />
                <div className="self-center text-center md:text-left text-shadow-md">
                  <h1 className="text-5xl font-extrabold leading-tight tracking-tight  md:mb-0 md:text-7xl text-center lg:text-left md:animate-bounce">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-biru to-merah">
                      {dataOprec.title[0]}
                    </span>
                  </h1>
                  <h1 className="text-3xl uppercase font-extrabold leading-tight tracking-tight mt-4 md:mb-0 md:text-5xl text-center lg:text-left">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-biru to-merah">
                      {dataOprec.title[1]}
                    </span>
                  </h1>
                </div>
              </header>
            </div>
          </section>
          <section
            id="tentang"
            className="relative flex flex-col content-center justify-center flex-grow w-full px-12 py-20 overflow-y-hidden bg-merah pattern-aztec"
          >
            <div className="self-center max-w-5xl text-center">
              <h1 className="text-4xl mb-10 font-extrabold tracking-tight md:text-4xl text-white uppercase">
                Tentang {dataOprec.name}
                <div className="w-12 h-1 mt-3 bg-biru mx-auto"></div>
              </h1>
              <div className="flex flex-col text-lg tracking-tight leading-relaxed text-justify text-white">
                <p className="">{dataOprec.description}</p>
              </div>
            </div>
          </section>
          <section
            id="linimasa"
            className="relative flex space-y-8 md:space-y-0 flex-col content-center justify-center flex-grow px-12 py-20 overflow-y-hidden bg-coffeetint text-black pattern-circuitry"
          >
            {/*Title*/}
            <div className="text-4xl mb-10 self-center max-w-5xl text-center">
              <div className="font-extrabold tracking-tight uppercase">
                Linimasa {dataOprec.name}
                {dataOprec.extends ? (
                  <div className="text-lg italic mt-4 font-normal tracking-tighter">
                    UPDATE TERBARU EXTEND
                  </div>
                ) : (
                  <></>
                )}
                <div className="w-12 h-1 mt-3 bg-merah mx-auto"></div>
              </div>
            </div>
            {/*Timelines*/}
            <div className="container mx-auto self-center content-center max-w-xl">
              <div className="grid grid-cols-1 gap-4 px-8 py-5">
                {dataOprec.timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-xl md:text-2xl flex-grow w-full text-center bg-merahmuda to-putih rounded-lg shadow-lg px-6 py-6 hover:transition-all transition transform hover:-translate-y-3"
                  >
                    <div className="font-extrabold tracking-tighter text-white">
                      {item.date}
                    </div>
                    <div className="font-extrabold tracking-tighter text-biru">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
            id="daftar"
            className="relative flex flex-col content-center justify-center flex-grow px-12 py-20 overflow-y-hidden bg-biru pattern-plus"
          >
            <div className="self-center flex flex-col space-y-8 md:space-y-0 md:flex-row content-center justify-between flex-grow w-full max-w-5xl lg:text-left text-center">
              <div>
                <div className="text-4xl md:text-6xl text-shadow-lg font-extrabold leading-relaxed tracking-tighter text-white text-center lg:text-left">
                  Siap mendaftar?
                </div>
                <div className="text-1xl md:text-1xl mt-4 text-shadow-lg leading-relaxed tracking-tighter text-white text-center lg:text-left">
                  {dataOprec.quotes}
                </div>
              </div>
              <div className="flex flex-col content-center justify-center text-lg tracking-tight leading-relaxed text-justify text-white">
                <Link
                  to={pathname + "/notice"}
                  className="text-center py-4 px-12 text-3xl font-bold bg-gradient-to-r bg-kuning  text-white rounded-full shadow-md hover:from-gray-50 hover:to-gray-300 hover:text-merahmuda transition ease-linear focus:outline-noned"
                  tabIndex="-1"
                >
                  Daftar
                </Link>
              </div>
            </div>
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

export default Home;
