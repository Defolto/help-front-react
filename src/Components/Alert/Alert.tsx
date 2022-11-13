import "./Alert.css";

export default function Alert(): JSX.Element {
  const needShow = false;

  return (
    <div className={`Alert ${needShow ? "Alert_show" : ""}`}>
      <div className="Alert__content">
        <p>Просто проверяем, что работает</p>
      </div>
    </div>
  );
}
