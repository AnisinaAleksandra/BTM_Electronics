import { Link } from "react-scroll";

import style from "./Header.module.scss";
import logoPath from "../../../assets/images/BTMLogo.png";
import whatsapIcon from "../../../assets/images/icons/whatsapp.png";
import telegramIcon from "../../../assets/images/icons/telegram.png";
import classNames from "classnames/bind";
import { useRef, useState } from "react";
import { LangSwitcher } from "../../LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(style);

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  document.querySelectorAll("li").forEach((elem) => {
    elem.onmouseenter = elem.onmouseleave = (e) => {
      const tolerance = 10;

      const left = 0;
      const right = elem.clientWidth;

      let x = e.pageX - elem.offsetLeft;

      if (x - tolerance < left) x = left;
      if (x + tolerance > right) x = right;

      elem.style.setProperty("--x", `${x}px`);
    };
  });

  const openMenu = (): void => {
    if (open) {
      if (ref.current) ref.current.style.display = "none";
      setTimeout(() => {
        setOpen(false);
      }, 0);
    }
    if (open === false) {
      if (ref.current) ref.current.style.display = "flex";
      setTimeout(() => {
        setOpen(true);
      }, 0);
    }
  };

  return (
    <div className={style.Header}>
      <div className={style.container}>
        <div className={style.logo_container}>
          <img src={logoPath} alt="logo" />
        </div>
        <nav
          className={style.menu_mobile}
          ref={ref}
          style={{
            transform: open ? "translateX(0)" : "translateX(150%)",
          }}
        >
          <ul>
            <li className={style.menu_item}>
              {" "}
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={openMenu}
              >
                {t("Main")}
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={openMenu}
              >
                {t("Our Services")}
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={openMenu}
              >
                {t("About Us")}
              </Link>
            </li>
            <li className={style.menu_item}>
              {" "}
              <Link
                onClick={openMenu}
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t("Contacts")}
              </Link>
            </li>
          </ul>
          <div className={style.mobileLang}>
            <LangSwitcher />
          </div>
        </nav>
        <nav className={style.menu_brouser}>
          <ul>
            <li className={style.menu_item}>
              {" "}
              <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t("Main")}
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t("Our Services")}
              </Link>
            </li>
            <li className={style.menu_item}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t("About Us")}
              </Link>
            </li>
            <li className={style.menu_item}>
              {" "}
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {t("Contacts")}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.burger_container} onChange={openMenu}>
          <input
            className={style.checkbox}
            checked={open}
            type="checkbox"
            name=""
            id="checkbox"
          />
          <div className={style.hamburgerLines}>
            <span className={cx("line", ["line1"])}></span>
            <span className={cx("line", ["line2"])}></span>
            <span className={cx("line", ["line3"])}></span>
          </div>
        </div>
        <div className={style.btns_container}>
          <a className={style.whatsapp} href="https://wa.me/971585987809">
            WhatsApp
          </a>
          <a className={style.telegram} href="https://t.me/btmelectronics">
            Telegram
          </a>
          <a className={style.chatsBtn} href="https://wa.me/971585987809">
            <img src={whatsapIcon} alt="whatsapLogo" />
          </a>
          <a className={style.chatsBtn} href="https://t.me/btmelectronics">
            <img src={telegramIcon} alt="telegramLogo" />
          </a>
          <div className={style.brouserLang}>
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
