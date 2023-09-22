import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps";

export const MapY = () => {
  return (
    <div id="map">
      <YMaps>
        <Map
          width="600px"
          height="450px"
          defaultState={{
            center: [55.74480472178784, 37.50417542405927],
            zoom: 14,
            controls: [],
          }}
        >
          <Placemark geometry={[55.74480472178784, 37.50417542405927]} />
          <ZoomControl options={{ position: { top: "20px", left: "5px" } }} />
        </Map>
      </YMaps>
    </div>
  );
};
