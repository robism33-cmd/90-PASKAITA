import { useEffect, useState } from "react";
import { IP_API_URL } from "../utils/constants";

export function useIpInfo() {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchIpData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(IP_API_URL);

      if (!response.ok) {
        throw new Error(`API klaida: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.reason || "Nepavyko gauti IP informacijos.");
      }

      setIpData(data);
    } catch (err) {
      setError(err.message || "Nepavyko prisijungti prie IP API.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIpData();
  }, []);

  return {
    ipData,
    loading,
    error,
    fetchIpData,
  };
}
