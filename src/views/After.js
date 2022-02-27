import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import { CheckUser, getUserData } from "../components/helpers/SessionHelper";
import { getPathName, getDataOprec } from "../components/helpers/DataHelper";

const After = () => {
  const { year, oprec } = useParams();
  const pathname = getPathName(useLocation().pathname);
  const dataOprec = getDataOprec(`${year}-${oprec}`);
  const [announcement, setAnnouncement] = useState([
    "Harap tunggu",
    "Lagi loading nih...",
    "Kami sedang menyiapkan yang kamu tunggu-tunggu... ⏳",
  ]);

  useEffect(() => {
    document.title = dataOprec ? `${dataOprec.title[0]} ${dataOprec.title[1]}` : 'Web Event Request BEM FILKOM 2022';
  }, [year, oprec])

  useEffect(() => {
    if (Object.keys(getUserData) < 1) return;

    const announceNim = async () =>
      await fetch(`${dataOprec.api.announce}/${getUserData.nim}`, {
        method: "GET",
      })
        .then((reply) => {
          if (reply.status !== 200) throw Error;
          return reply.json();
        })
        .then((reply) => {
          if (reply.success === true) {
            setAnnouncement(dataOprec.acceptMessage);
          } else {
            setAnnouncement(dataOprec.rejectMessage);
          }
        })
        .catch((err) => {
          setAnnouncement([
            "Waduh",
            "Kamu kan gak daftar...",
            "Kok ngecek pengumuman :(",
          ]);
        });

    if (Date.now() <= dataOprec.closeDate) {
      setAnnouncement(dataOprec.afterMessage);
    } else if (
      Date.now() > dataOprec.closeDate &&
      Date.now() <= dataOprec.announceDate
    ) {
      setAnnouncement(dataOprec.closedMessage);
    } else if (Date.now() > dataOprec.announceDate) {
      announceNim();
    }
  }, [getUserData]);

  return (
    <>
      {dataOprec ? (<><CheckUser redirect pathname={pathname} />

        <section className="relative flex flex-col content-center h-full min-h-screen py-24 px-16 justify-center flex-grow overflow-y-hidden bg-coffeetint pattern-cloud">
          <header className="relative z-10 flex flex-col content-center justify-center flex-grow space-x-0 md:space-x-6 md:flex-row md:justify-center">
            <div className="self-center text-center md:text-left">
              <h1 className="text-3xl uppercase font-extrabold mt-4 text-center md:mb-0 md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-merah to-biru">
                {announcement[0]}
              </h1>
              <div className="max-w-xl text-center">
                <div className="flex flex-col justify-center md:justify-start text-md leading-snug tracking-tighter text-gray-900 mt-5 ml-1">
                  {announcement[0] === "Selamat!!!" ? (<div className="flex flex-col space-y-3 p-4 bg-green-400 text-white rounded-lg shadow-md transition ease-linear">
                    <span className="font-bold">{announcement[1]}</span>
                    <p
                      className="whitespace-pre-wrap leading-normal"
                      dangerouslySetInnerHTML={{ __html: announcement[2] }}
                    />
                  </div>) : <div className="flex flex-col space-y-3 p-4 bg-merahmuda text-white rounded-lg shadow-md transition ease-linear">
                    <span className="font-bold">{announcement[1]}</span>
                    <p
                      className="whitespace-pre-wrap leading-normal"
                      dangerouslySetInnerHTML={{ __html: announcement[2] }}
                    />
                  </div>}
                </div>
              </div>
            </div>
          </header>
        </section></>)
        :
        (<><section className="relative flex flex-col content-center justify-center flex-grow h-screen overflow-hidden bg-coffeetint">
          <div className="self-center max-w-5xl text-4xl text-center text-kuning font-bold">Halaman Tidak Ditemukan</div>
        </section></>)}
    </>
  );
};

export default After;
