import "./Alert.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearTextAlert } from "./AlertSlice";

export default function Alert(): JSX.Element {
  const dispatch = useAppDispatch();
  const textAlert = useAppSelector((state) => state.alert.text);

  return (
    <div className={`Alert ${textAlert ? "Alert_show" : ""}`}>
      <div className="Alert__content">
        <p className="Alert__content_title">{textAlert}</p>
        <p
          className="Alert__content_close"
          onClick={() => dispatch(clearTextAlert())}
        >
          Закрыть
        </p>
      </div>
    </div>
  );
}
