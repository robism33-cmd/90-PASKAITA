import "./ErrorState.css";

export default function ErrorState({ message }) {
  return (
    <div className="error-box">
      <div className="error-title">Nepavyko gauti IP informacijos</div>
      <div className="error-text">{message}</div>
    </div>
  );
}
