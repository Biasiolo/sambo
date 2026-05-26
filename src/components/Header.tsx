/* eslint-disable prettier/prettier */

import heroBanner from "@/assets/banner1.png";

import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
  FaApple,
  FaAmazon,
} from "react-icons/fa";

import { SiTidal } from "react-icons/si";
import { FaDeezer } from "react-icons/fa";

export function Header() {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="relative ">
        {/* Banner */}
        <img
          src={heroBanner}
          alt="Banda Sambô"
          className="h-full w-full object-cover object-top"
        />

        {/* Navegação */}
        {/* Navegação */}
<nav className="absolute top-0 left-0 z-20 flex w-full justify-center px-5 py-5 text-black">
  <div className="flex items-center gap-6 md:gap-8">

    {/* Links */}
    <a
      href="#agenda"
      className="text-md font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-60"
    >
      Agenda
    </a>

    <a
      href="#integrantes"
      className="text-md font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-60"
    >
      Sobre
    </a>

    <a
      href="#contato"
      className="text-md font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-60"
    >
      Contato
    </a>

    {/* Divider */}
    <div className="h-4 w-px bg-white/40" />

    {/* Redes */}
    <a
      href="#"
      aria-label="Facebook"
      className="transition-transform hover:scale-110"
    >
      <FaFacebookF size={18} />
    </a>

    <a
      href="#"
      aria-label="Instagram"
      className="transition-transform hover:scale-110"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href="#"
      aria-label="YouTube"
      className="transition-transform hover:scale-110"
    >
      <FaYoutube size={20} />
    </a>

    <a
      href="#"
      aria-label="Spotify"
      className="transition-transform hover:scale-110"
    >
      <FaSpotify size={20} />
    </a>

    <a
      href="#"
      aria-label="TikTok"
      className="transition-transform hover:scale-110"
    >
      <FaTiktok size={20} />
    </a>

    <a
      href="#"
      aria-label="Apple Music"
      className="transition-transform hover:scale-110"
    >
      <FaApple size={20} />
    </a>

    <a
      href="#"
      aria-label="Amazon Music"
      className="transition-transform hover:scale-110"
    >
      <FaAmazon size={20} />
    </a>

    <a
      href="#"
      aria-label="Deezer"
      className="transition-transform hover:scale-110"
    >
      <FaDeezer size={20} />
    </a>

    <a
      href="#"
      aria-label="Tidal"
      className="transition-transform hover:scale-110"
    >
      <SiTidal size={20} />
    </a>
  </div>
</nav>
      </div>

      
    </header>
  );
}