import style from "./Footer.module.scss";
import logoPath from "../../../assets/images/BTMLogo.png";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className={style.container}>
        <div className={style.logo_container}>
          <img src={logoPath} alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
