/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { overpass } from "@/lib/utils";
import { discordLink } from "@/constants/const";


function Navbar() {

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className={`${styles.navbar} ${overpass.className} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarLogoContainer}>
        <div className={styles.navbarLogo}>
          <Link href={"/"} className={styles.navbarLogoLink}>
            <img
              src="gremio_logo_navbar.webp"
              alt="Logotipo del gremio astral"
              fetchPriority="low"
              loading="lazy"
              decoding="async"
              className={styles.logoImage}
            />
            Gremio Astral
          </Link>
        </div>
      </div>

      <div
        className={`${styles.navbarLinksContainer} ${
          isOpen ? `${styles.open}` : ""
        }`}
      >
        <Link className={styles.navbarLink} href="#home">
          Inicio
        </Link>
        <Link className={styles.navbarLink} href="#about">
          Sobre nosotros
        </Link>
                <Link className={styles.navbarLink} href="#our-stories">
          Nuestras Aventuras
        </Link>
        <div>
        <button className={styles.DiscordButton}>
          <Link
            className={styles.DiscordButtonText}
            href={`${discordLink}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <img
              src="brand-discord.svg"
              alt="discord-logo"
              className={styles.discordButtonLogo}
            />
            Discord
          </Link>
        </button>
        </div>
      </div>
      <div className={styles.navbarMenuButton} onClick={toggleMenu}>
        {isOpen ? (
          <XMarkIcon className={styles.navbarMenuIcon} />
        ) : (
          <Bars3Icon className={styles.navbarMenuIcon} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
