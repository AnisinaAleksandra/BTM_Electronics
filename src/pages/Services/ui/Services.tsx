import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import style from "./Services.module.scss";
import iphoneImg from "../../../assets/images/appleel.jpg";
import iphoneImgtwo from "../../../assets/images/macProInBlack.jpg";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className={style.Services} id="services">
      <div className={style.title_container} data-aos="fade-right">
        <h1 className={style.title}>{t("Our Services")}</h1>
      </div>
      <div className={style.services_item}>
        <div className={style.paralax_container}>
          <ParallaxBanner style={{ aspectRatio: "1" }}>
            <ParallaxBannerLayer speed={-20}>
              <img
                className={style.usedIphones}
                src={iphoneImg}
                alt="usedIphons"
                loading="lazy"
                style={{ width: "300px", height: "500px" }}
              />
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </div>
        <div className={style.service_description}>{t("We supply")}</div>
      </div>
      <div className={style.services_item}>
        <div className={style.paralax_container}>
          <ParallaxBanner style={{ aspectRatio: "1" }}>
            <ParallaxBannerLayer speed={-20}>
              <img
                className={style.usedIphones}
                src={iphoneImgtwo}
                alt="usedIphones"
                loading="lazy"
                style={{ width: "300px", height: "500px" }}
              />
            </ParallaxBannerLayer>
          </ParallaxBanner>
        </div>
        <div className={style.service_description}>{t("We provide")}</div>
      </div>
    </div>
  );
};

export default Services;
