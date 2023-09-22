import { MapY } from "../../../widget/MapY";
import style from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={style.Contacts}>
      <div className={style.title}>Contact Us</div>
      <div className={style.map_messageForm}>
        <div className={style.map}>
          <MapY />
        </div>
        <div className={style.messageForm}></div>
      </div>
    </div>
  );
};

export default Contacts;
