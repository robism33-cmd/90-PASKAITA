import { useMemo } from "react";
import InfoPanel from "../../components/InfoPanel";
import MapView from "../../components/MapView";
import LoadingState from "../../components/LoadingState";
import ErrorState from "../../components/ErrorState";
import { useIpInfo } from "../../hooks/useIpInfo";
import { buildLocationLabel, getMapViewState } from "../../utils/ipHelpers";
import "./Home.css";

export default function Home() {
  const { ipData, loading, error, fetchIpData } = useIpInfo();

  const viewState = useMemo(() => getMapViewState(ipData), [ipData]);
  const locationLabel = useMemo(() => buildLocationLabel(ipData), [ipData]);

  return (
    <div className="home-page">
      <div className="home-container">
        <header className="home-header">
          <h1>IP Address Finder</h1>
          <p>
            React projektas, kuris parodo viešą IP adresą, apytikslę vietą ir
            žemėlapį.
          </p>
        </header>

        <div className="home-layout">
          <div className="home-left">
            {loading ? (
              <LoadingState />
            ) : error ? (
              <ErrorState message={error} />
            ) : (
              <InfoPanel
                ipData={ipData}
                locationLabel={locationLabel}
                onRefresh={fetchIpData}
              />
            )}
          </div>

          <div className="home-right">
            <div className="map-card">
              <div className="map-card-header">
                <h2>Vieta žemėlapyje</h2>
              </div>
              <MapView ipData={ipData} viewState={viewState} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
