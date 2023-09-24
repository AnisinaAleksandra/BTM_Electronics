import style from "./About.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import largeBanner from "../../../assets/images/large-phone.jpg";
import logo from "../../../assets/images/logo.png";
import dysonLogo from "../../../assets/images/Brands/Dyson.png";
import appleLogo from "../../../assets/images/Brands/Apple.png";
import miLogo from "../../../assets/images/Brands/Xiaomi.png";
import playStationLogo from "../../../assets/images/Brands/SonyPlaystation.png";

const About = () => {
  return (
    <div className={style.About}>
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
            width: "100%",
            height: "97%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div id={style.text_container}>
            <div className={style.shaped}>
              <img className={style.logo} src={logo}></img>
            </div>

            <div className={style.content}>
              <div className={style.title}>About Us</div>
              <div className={style.text}>
                BTM Electronics is a family owned and operated company, we offer
                more than 25 years of experience in the electronics industry. We
                assure quality and efficient service at the right price.“For
                existing systems and latest in technology, please reach out to
                us”.
              </div>
            </div>
          </div>
        </div>
      </ParallaxBanner>
      <div className={style.logo_container}>
        <div className={style.container}>
          <div className={style.logo_item}>
            <img src={dysonLogo} alt="dyson" />
          </div>
          <div className={style.logo_item}>
            <img src={appleLogo} alt="apple" id={style.appleLogo} />
          </div>
          <div className={style.logo_item}>
            <img src={miLogo} alt="mi" />
          </div>
          <div className={style.logo_item}>
            <img src={playStationLogo} alt="dyson" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
