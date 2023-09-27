import { Link } from "react-scroll";

import style from "./Header.module.scss";
import logoPath from "../../../assets/images/BTMLogo.png";
const Header = () => {
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
  return (
    <div className={style.Header}>
      <div className={style.container}>
        <div className={style.logo_container}>
          <img src={logoPath} alt="logo" />
        </div>
        <nav className={style.menu}>
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
                Main
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
                Our Services
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
                About Us
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
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.btns_container}>
          <a className={style.whatsapp} href="https://wa.me/971585987809">
            WhatsApp
          </a>

          <a className={style.telegram} href="https://t.me/btmelectronics">
            Telegram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
