/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import styles from "./page.module.css";
import {
  blueskyLink,
  discordLink,
  instagramLink,
  tiktokLink,
  twitchLink,
  youtubeLink,
} from "@/constants/const";
import {
  IconBrandYoutube,
  IconBrandTwitch,
  IconBrandBluesky,
  IconBrandTiktok,
  IconBrandDiscordFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { overpass } from "@/lib/utils";
import TiktokList from "./components/TikTokList/TikTokList";
import { useEffect, useState } from "react";
import { getHomeTiktoks } from "@/actions/home-tiktok-action";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Home() {
  const [tiktoks, setTiktoks] = useState<any[]>([]);

  useEffect(() => {
    const fetchTiktoks = async () => {
      const tiktoks = await getHomeTiktoks();
      setTiktoks(tiktoks);
    };
    fetchTiktoks();
  }, []);

  return (
    <main>
      <Navbar />
      {/* Hero Section */}
      <section
        className={`${styles.HeroContainer} ${overpass.className}`}
        id="home"
      >
        <div className={styles.overlay}></div>
        <video
          className={styles.HeroVideo}
          autoPlay
          loop
          muted
          playsInline
          src="/gremiovideo.webm"
        />
        <div className={styles.HeroContent}>
          <div className={styles.HeroLogo}>
            <img
              src="gremio_logo.webp"
              alt="Logotipo del gremio astral"
              className={styles.HeroLogoImage}
              fetchPriority="low"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className={styles.HeroTexts}>
            <h1 className={styles.HeroTitle}>
              ¡Bienvenidos/as/es al Gremio Astral!
            </h1>
            <p className={styles.HeroDescription}>
              Acompáñanos en maravillosas y trepidantes aventuras en Dilmund. Un
              mundo mágico donde tú eres el protagonista de nuestras historias,
              o el que crea la suya propia dirigiendo un grupo de heroes.
            </p>
          </div>
          <div className={`${styles.HeroButtonsContainer}`}>
            <button className={styles.HeroButton}>
              <Link
                href={discordLink}
                rel="noreferrer noopener"
                target="_blank"
                className={`${styles.HeroButtonLink} ${overpass.className}`}
              >
                <IconBrandDiscordFilled className={styles.buttonLogo} /> ¿Desea
                saber más?
              </Link>
            </button>
            <button className={styles.HeroButton}>
              <Link
                href={twitchLink}
                rel="noreferrer noopener"
                target="_blank"
                className={`${styles.HeroButtonLink} ${overpass.className}`}
              >
                <IconBrandTwitch className={styles.buttonLogo} />
                Twitch
              </Link>
            </button>
          </div>
          <div className={styles.HeroSocialMediaContainer}>
            <div className={styles.HeroSocialMedia}>
              <Link
                href={blueskyLink}
                rel="noreferrer noopener"
                target="_blank"
                className={styles.Links}
              >
                <IconBrandBluesky className={styles.socialLogo} />
              </Link>
            </div>
            <div className={styles.HeroSocialMedia}>
              <Link
                href={youtubeLink}
                rel="noreferrer noopener"
                target="_blank"
                className={styles.Links}
              >
                <IconBrandYoutube className={styles.socialLogo} />
              </Link>
            </div>
            <div className={styles.HeroSocialMedia}>
              <Link
                href={tiktokLink}
                rel="noreferrer noopener"
                target="_blank"
                className={styles.Links}
              >
                <IconBrandTiktok className={styles.socialLogo} />
              </Link>
            </div>
            <div className={styles.HeroSocialMedia}>
              <Link
                href={instagramLink}
                rel="noreferrer noopener"
                target="_blank"
                className={styles.Links}
              >
                <IconBrandInstagram className={styles.socialLogo} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        className={`${styles.AboutContainer} ${overpass.className}`}
        id="about"
      >
        <div className={styles.AboutContentContainer}>
          <div className={styles.AboutTitle}>
            <h1>El maestro del gremio</h1>
          </div>
          <div className={styles.AboutContent}>
            <div className={styles.AboutImageContainer}>
              <img
                src="laurentpequeno.webp"
                alt="Imagen de Laurent"
                className={styles.AboutImage}
                fetchPriority="low"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.RightSideContainer}>
              <div className={styles.AboutTexts}>
                <h2>¡Hola! Soy Laurent</h2>
                <p>
                  Hace ya más de diez años me senté por primera vez tras la
                  pantalla del director de juego. Desde entonces, he estado
                  guiando a compañeros a través de mundos fantásticos,
                  desafiando a jugadores con misterios y compartiendo grandes
                  momentos de emoción, risas y épica alrededor de la mesa. Soy
                  Laurent, director de juegos de rol, y para mí el rol no es
                  solo un pasatiempo, sino también mi trabajo y una forma de
                  crear historias que se viven y perduran para siempre. Con esa
                  misma pasión nació el Gremio Astral, una comunidad de rol
                  donde aventureros y aventureras de todas partes nos reunimos
                  para dar vida a relatos por el multiverso. Aquí, cada partida
                  es un viaje, cada dado lanzado abre una nueva posibilidad y
                  cada jugador encuentra un lugar para brillar en el firmamento.
                  El Gremio Astral es más que un grupo de juego: es un espacio
                  donde la imaginación se convierte en la mejor de las
                  realidades compartidas. Si alguna vez soñaste con viajar por
                  las estrellas, descubrir mundos increíbles, o escribir tu
                  propia leyenda, este es tu lugar. Te invito a unirte al Gremio
                  Astral y formar parte de las increíbles aventuras que aún
                  están por contarse.
                </p>
              </div>
              <button className={styles.HeroButton}>
                <Link
                  href={discordLink}
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`${styles.HeroButtonLink} ${overpass.className}`}
                >
                  <IconBrandDiscordFilled className={styles.buttonLogo} />{" "}
                  ¡Entra en nuestro Discord!
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Nuestras Aventuras */}
      <section
        className={`${styles.OurStoriesContainer} ${overpass.className}`}
        id="our-stories"
      >
        <div className={styles.OurStoriesContentContainer}>
          <div className={styles.OurStoriesTitle}>
            <h1>Nuestras aventuras</h1>
          </div>
          <div className={styles.OurStoriesContent}>
            <TiktokList tiktoks={tiktoks} />
            <div className={styles.TextAndButtonContainer}>
              <p>
                Esto es solo una pequeña muestra de la magia que podrás
                disfrutar en el gremio. ¡No lo dudes!{" "}
              </p>
              <button className={styles.HeroButton}>
                <Link
                  href={discordLink}
                  rel="noreferrer noopener"
                  target="_blank"
                  className={`${styles.HeroButtonLink} ${overpass.className}`}
                >
                  <IconBrandDiscordFilled className={styles.buttonLogo} />{" "}
                  ¡Unete a nosotros!
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
