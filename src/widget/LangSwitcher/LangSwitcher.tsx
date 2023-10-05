import style from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
export const LangSwitcher = () => {
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    void i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <button className={style.LangSwitcher}>
      <img src={t("language")} alt="" onClick={toggle} />
    </button>
  );
};
