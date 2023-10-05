import style from "./Main.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import largeBanner from "../../../assets/images/large-phone.jpg";
import { useTranslation } from "react-i18next";
const Main = () => {
  const { t } = useTranslation();
  return (
    <div className={style.Main} id="main">
      <ParallaxBanner
        id={style.firstBanner}
        layers={[{ image: `${largeBanner}`, speed: -15 }]}
        className="aspect-[2/1]"
        style={{ inset: "0 0" }}
      >
        <div className={style.text_main}>
          <h1>{t("mainTitileOne")}</h1>
          <span>BTM Electronics</span>
          <h1>{t("mainTitileTwo")}</h1>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Main;
