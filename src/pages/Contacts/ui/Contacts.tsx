import { MapY } from "../../../widget/MapY";
import style from "./Contacts.module.scss";
import svgAdress from "../../../assets/images/icons/address.svg";
import svgPhone from "../../../assets/images/icons/phone.svg";
import svgEmail from "../../../assets/images/icons/email.svg";
import { FormComponent } from "../../../components/FormComponent";
const Contacts = () => {
  return (
    <div className={style.Contacts}>
      <div className={style.title}>Contact Us</div>
      <div className={style.info_cards_list}>
        <div className={style.info_card}>
          <div className={style.icon}>
            <img src={svgAdress} />
          </div>
          <div className={style.description}>
            <div className={style.title_card}>Our address</div>
            <div className={style.text_card}>Dubai Airport Free Zone</div>
          </div>
        </div>
        <div className={style.info_card}>
          <div className={style.icon}>
            <img src={svgEmail} />
          </div>
          <div className={style.description}>
            <div className={style.title_card}>Our email</div>
            <div className={style.text_card}>
              <a href="mailto:btmelectronics7@gmail.com">
                btmelectronics7@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className={style.info_card}>
          <div className={style.icon}>
            <img src={svgPhone} />
          </div>
          <div className={style.description}>
            <div className={style.title_card}>Our phone</div>
            <div className={style.text_card}>+971585987809</div>
          </div>
        </div>
      </div>
      <div className={style.map_message_form}>
        <div className={style.map}>
          <MapY />
        </div>
        <div className={style.messageForm}>
          <FormComponent />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
