const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative flex flex-col content-center justify-center flex-grow overflow-y-hidden bg-merah pt-20 pb-16 px-12 pattern-circuitry"
    >
      <div className="text-center text-white">
        <h1 className="mb-3 text-xl font-semibold leading-tight tracking-tighter">
          Made with <span className="text-red-500">&hearts;</span> by Biro
          Pengembangan Informasi Teknologi
        </h1>
        <p className="tracking-tight">
          <span className="font-semibold">&copy; 2022 BEM FILKOM UB</span>
          {"  "}—{"  "}Kabinet Aryakarsa{"  "}
        </p>
        <div className="mt-10 text-center">
          <a href="https://www.instagram.com/bemfilkomub/">
            <i className="fab fa-instagram text-4xl transition transform hover:scale-125 fill-current text-white mx-2"></i>
          </a>
          <a href="line://ti/p/@csj9184g">
            <i className="fab fa-line text-4xl transition transform hover:scale-125 fill-current text-white mx-2"></i>
          </a>
          <a href="https://www.tiktok.com/@bemfilkomub">
            <i className="fab fa-tiktok text-4xl transition transform hover:scale-125 fill-current text-white mx-2"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCLAmrHwP0hvOjPGHacMThZQ">
            <i className="fab fa-youtube text-4xl transition transform hover:scale-125 fill-current text-white mx-2"></i>
          </a>
          <a href="https://twitter.com/BEMFILKOMUB/">
            <i className="fab fa-twitter text-4xl transition transform hover:scale-125 fill-current text-white mx-2"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
