import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import style from "./Map.module.scss";
export const MapY = () => {
  return (
    <div id="map" data-aos="fade-up-right">
      <YMaps query={{ lang: "en_US" }}>
        <Map
          // width="50%"
          // height="450px"
          // borderRadius="10px"
          style={{ borderRadius: "10px", width: "100%", height: "445px" }}
          className={style.Map}
          defaultState={{
            center: [25.27241, 55.37508],
            zoom: 12,
            controls: [],
          }}
        >
          <Placemark geometry={[25.27241, 55.37508]} />
          <ZoomControl options={{ position: { top: "20px", left: "5px" } }} />
        </Map>
      </YMaps>
    </div>
  );
};
