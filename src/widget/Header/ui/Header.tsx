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
          <img src={logoPath} alt="logoPath" />
        </div>
        <nav className={style.menu}>
          <ul>
            <li className={style.menu_item}>Main</li>
            <li className={style.menu_item}>About</li>
            <li className={style.menu_item}>Delivery</li>
            <li className={style.menu_item}>Contacts</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
