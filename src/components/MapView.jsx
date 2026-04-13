import Map, { Marker, NavigationControl } from "react-map-gl/mapbox";
import { FiMapPin } from "react-icons/fi";
import { MAPBOX_TOKEN } from "../utils/constants";
import "./MapView.css";

export default function MapView({ ipData, viewState }) {
  return (
    <div className="map-container">
      <Map
        initialViewState={viewState}
        longitude={viewState.longitude}
        latitude={viewState.latitude}
        zoom={viewState.zoom}
        mapboxAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        style={{ width: "100%", height: "100%" }}
      >
        <NavigationControl position="top-right" />

        {ipData?.latitude && ipData?.longitude && (
          <Marker
            longitude={Number(ipData.longitude)}
            latitude={Number(ipData.latitude)}
            anchor="bottom"
          >
            <div className="map-marker">
              <FiMapPin size={22} />
            </div>
          </Marker>
        )}
      </Map>
    </div>
  );
}
