import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { BiMouse } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import mascot from "../../assets/Logo/mascotHeroFindIT24.png";
import logo from "../../assets/Logo/logoFindit.png";
import stars from "../../assets/background/STARSHeroDesktop.png";
import clouds from "../../assets/background/awanBawahDesktop.svg";
import leftClouds from "../../assets/background/decorKiriTaglineHero.png";
import rightClouds from "../../assets/background/awanKananAtas.svg";
import academy from "../../assets/Logo/Academy.png";
import workshopPanel from "../../assets/background/WebinarPlaceholderDesktop.svg";
import separator from "../../assets/background/TopSeparatorWebinar.png";
import bottomSeparator from "../../assets/background/BottomSeparatorWebinar.png";
import sponsorStars from "../../assets/background/STARS-SponsorsDekstop.png";
import planet from "../../assets/background/leftPlanet-Sponsors.png";
import questionMascot from "../../assets/background/hmm1.png";
import circuit from "../../assets/background/bg1.svg";
import styles from "./Landing.module.css";

export function LandingHero() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <>
      <section className={styles.hero} aria-labelledby="landing-title">
        <div className={styles.heroBackground} aria-hidden="true" />
        <Image src={stars} alt="" className={styles.heroStars} priority />
        <p className={styles.year}>2024</p>
        <p className={styles.theme}>“Tech Horizon: Beyond the Digital Sky”</p>
        <h1 id="landing-title" className={styles.heroTitle}>
          fiNd It!
        </h1>
        <div className={styles.heroPanel}>
          <p className={styles.intro}>
            <strong>Future Innovations and Discovery IT,</strong> sebuah
            kompetisi tingkat nasional di bidang Teknologi Informasi. FIND IT!
            terdiri dari dua acara yaitu <strong>webinar</strong> dan{" "}
            <strong>lomba-lomba</strong> yang mendorong inovasi di era digital.
          </p>
          <div className={styles.heroAction}>
            <p>
              Siapkan diri anda untuk berinovasi dan{" "}
              <strong>melampaui batas imajinasi.</strong>
            </p>
            <div className={styles.buttons}>
              <Link
                className={styles.button}
                href={
                  isAuthenticated ? "/competition/capture-the-flag" : "/login"
                }
              >
                DAFTAR KOMPETISI
              </Link>
              <Link
                className={`${styles.button} ${styles.outline}`}
                href="/aboutus"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={mascot}
          alt="FIND IT! robot mascot"
          className={styles.heroMascot}
          priority
        />
      </section>
      <section
        className={styles.tagline}
        aria-label="When innovation hits everyone's imagination"
      >
        <Image src={clouds} alt="" className={styles.clouds} />
        <Image src={leftClouds} alt="" className={styles.leftClouds} />
        <Image src={rightClouds} alt="" className={styles.rightClouds} />
        <div className={styles.taglineContent}>
          <Image src={logo} alt="FIND IT!" className={styles.taglineLogo} />
          <p>WHEN INNOVATION</p>
          <h2>HITS EVERYONE’S IMAGINATION</h2>
          <a href="#competitions" className={styles.scroll}>
            <BiMouse aria-hidden="true" />
            Gulir ke bawah
          </a>
        </div>
      </section>
    </>
  );
}

export function LandingWorkshop() {
  return (
    <section className={styles.workshop} aria-labelledby="workshop-title">
      <Image src={separator} alt="" className={styles.topSeparator} />
      <div className={styles.workshopInner}>
        <h2 id="workshop-title" className={styles.heading}>
          WORKSHOP
        </h2>
        <p className={styles.subtitle}>
          “Exploring Blockchain : Embracing Future Technology”
        </p>
        <div className={styles.workshopContent}>
          <div className={styles.academy}>
            <Image
              src={workshopPanel}
              alt=""
              className={styles.workshopPanel}
            />
            <Image
              src={academy}
              alt="Workshop fox mascot wearing a graduation cap"
              className={styles.academyImage}
            />
          </div>
          <div className={styles.workshopCopy}>
            <p>
              Workshop FIND IT! akan membahas teknologi blockchain, mulai dari
              dasar-dasar hingga aplikasi praktis dalam industri. Peserta akan
              memahami bagaimana teknologi ini mengubah cara transaksi, keamanan
              data, dan bahkan sistem keuangan.
            </p>
            <Link
              href="/workshop"
              className={`${styles.button} ${styles.orange}`}
            >
              WEBINAR <HiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      <Image src={bottomSeparator} alt="" className={styles.bottomSeparator} />
    </section>
  );
}

export function LandingPartners() {
  return (
    <section className={styles.partners} aria-labelledby="partners-title">
      <Image src={sponsorStars} alt="" className={styles.sponsorStars} />
      <Image src={planet} alt="" className={styles.planetLeft} />
      <Image src={planet} alt="" className={styles.planetRight} />
      <div className={styles.partnerHeading}>
        <h2 id="partners-title" className={styles.heading}>
          our <span>PARTNER</span>
        </h2>
        <p className={styles.subtitle}>
          We sincerely express our appreciation to our sponsor for their
          generous support and confidence in FIND IT! 2024
        </p>
      </div>
      <div className={styles.sponsors}>
        <Image
          src="/assets/landing/teleperformance.png"
          width={359}
          height={169}
          alt="Teleperformance"
          className={styles.teleperformance}
        />
        <Image
          src="/assets/landing/raxsaco.png"
          width={162}
          height={44}
          alt="Raxsa.co Apparel"
          className={styles.raxsaco}
        />
      </div>
    </section>
  );
}

export function LandingQuestions() {
  return (
    <section className={styles.questions} aria-labelledby="questions-title">
      <Image src={circuit} alt="" className={styles.circuitLeft} />
      <Image src={circuit} alt="" className={styles.circuitRight} />
      <div className={styles.questionPanel}>
        <Image
          src={questionMascot}
          alt="FIND IT! mascot thinking"
          className={styles.questionMascot}
        />
        <div className={styles.questionCopy}>
          <h2 id="questions-title">
            HAVE ANY
            <br />
            QUESTIONS?
          </h2>
          <div className={styles.buttons}>
            <a
              className={styles.button}
              href="mailto:findituniversitasgadjahmada@gmail.com"
            >
              KONTAK KAMI
            </a>
            <Link className={`${styles.button} ${styles.outline}`} href="/faq">
              LIHAT FAQ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
