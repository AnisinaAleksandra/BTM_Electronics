import style from "./About.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import largeBanner from "../../../assets/images/large-phone.jpg";
import logo from "../../../assets/images/logo.png";
import dysonLogo from "../../../assets/images/Brands/Dyson.png";
import appleLogo from "../../../assets/images/Brands/Apple.png";
import miLogo from "../../../assets/images/Brands/Xiaomi.png";
import playStationLogo from "../../../assets/images/Brands/SonyPlaystation.png";
import googleLogo from "../../../assets/images/Brands/Google.png";
import samsungLogo from "../../../assets/images/Brands/Samsung.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className={style.About} id="about">
      <ParallaxBanner
        id={style.aboutBanner}
        layers={[{ image: `${largeBanner}`, speed: -15 }]}
        className="aspect-[2/1]"
        style={{
          inset: "0 0",
          transform: "scaleX(-1)",
        }}
      >
        <div
          className={style.text_main}
          style={{
            transform: "scaleX(-1)",
            width: "95%",
            height: "97%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div id={style.text_container}>
            <div className={style.shaped} data-aos="fade-left">
              <img className={style.logo} src={logo}></img>
            </div>
            <div
              className={style.content}
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className={style.title}>{t("About Us")}</div>
              <div className={style.text}>{t("Our company was formed")}</div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <div className={style.logo_container}>
        <div className={style.container}>
          <div className={style.logo_item}>
            <img src={appleLogo} alt="apple" id={style.appleLogo} />
          </div>
          <div className={style.logo_item}>
            <img src={samsungLogo} alt="samsung" id={style.samsungLogo} />
          </div>

          <div className={style.logo_item}>
            <img src={googleLogo} alt="google" />
          </div>
          <div className={style.logo_item}>
            <img src={miLogo} alt="mi" />
          </div>
          <div className={style.logo_item}>
            <img src={playStationLogo} alt="ps" />
          </div>
          <div className={style.logo_item}>
            <img src={dysonLogo} alt="dyson" id={style.dysonLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
