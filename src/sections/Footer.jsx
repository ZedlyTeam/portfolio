import { BsTelegram } from "react-icons/bs";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">
          <a
            href="https://t.me/ZedlyTeam"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <BsTelegram />
          </a>
          <a
            href="https://www.instagram.com/ZedlyTeam"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white "
            target="_blank"
          >
            <FaSquareInstagram />
          </a>
          <a
            href="https://www.youtube.com/@ZedlyTeam"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <IoLogoYoutube />
          </a>
          <a
            href="https://github.com/ZedlyTeam"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white "
            target="_blank"
          >
            <FaSquareGithub />
          </a>
        </div>
        <p>@ 2025 Zedly. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
