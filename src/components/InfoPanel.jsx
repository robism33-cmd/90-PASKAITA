import {
  FiRefreshCw,
  FiGlobe,
  FiMapPin,
  FiWifi,
  FiClock,
  FiMap,
} from "react-icons/fi";
import InfoCard from "./InfoCard";
import "./InfoPanel.css";

export default function InfoPanel({ ipData, locationLabel, onRefresh }) {
  return (
    <div className="info-panel">
      <div className="info-panel-header">
        <div>
          <h2>Tavo IP informacija</h2>
          <p>Trumpa ir aiški tinklo informacija vienoje vietoje</p>
        </div>

        <button type="button" className="refresh-btn" onClick={onRefresh}>
          <FiRefreshCw />
          <span>Atnaujinti</span>
        </button>
      </div>

      <div className="info-list">
        <InfoCard
          icon={<FiGlobe />}
          label="IP adresas"
          value={ipData?.ip || "-"}
        />
        <InfoCard icon={<FiMapPin />} label="Vieta" value={locationLabel} />
        <InfoCard
          icon={<FiWifi />}
          label="Tiekėjas"
          value={ipData?.org || ipData?.network || "-"}
        />
        <InfoCard
          icon={<FiMap />}
          label="Pašto kodas"
          value={ipData?.postal || "-"}
        />
        <InfoCard
          icon={<FiClock />}
          label="Laiko zona"
          value={ipData?.timezone || "-"}
        />
        <InfoCard
          icon={<FiMapPin />}
          label="Šalis"
          value={ipData?.country_name || "-"}
        />
        <InfoCard
          icon={<FiMapPin />}
          label="Regionas"
          value={ipData?.region || "-"}
        />
        <InfoCard
          icon={<FiMapPin />}
          label="Miestas"
          value={ipData?.city || "-"}
        />
      </div>
    </div>
  );
}
