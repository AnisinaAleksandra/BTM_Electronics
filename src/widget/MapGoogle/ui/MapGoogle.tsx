import style from "./MapGoogle.module.scss";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({
  text,
}: {
  lat: number;
  lng: number;
  text: string;
}) => <div>{text}</div>;

export const MapGoogle = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div className={style.MapGoogle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};
