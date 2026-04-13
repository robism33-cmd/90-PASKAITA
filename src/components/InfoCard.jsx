import "./InfoCard.css";

export default function InfoCard({ icon, label, value }) {
  return (
    <div className="info-card">
      <div className="info-card-icon">{icon}</div>
      <div className="info-card-content">
        <div className="info-card-label">{label}</div>
        <div className="info-card-value">{value}</div>
      </div>
    </div>
  );
}
