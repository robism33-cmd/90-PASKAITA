export function buildLocationLabel(ipData) {
  return (
    [ipData?.city, ipData?.region, ipData?.country_name]
      .filter(Boolean)
      .join(", ") || "-"
  );
}

export function getMapViewState(ipData) {
  if (!ipData?.latitude || !ipData?.longitude) {
    return {
      longitude: 25.2797,
      latitude: 54.6872,
      zoom: 10,
    };
  }

  return {
    longitude: Number(ipData.longitude),
    latitude: Number(ipData.latitude),
    zoom: 11,
  };
}
