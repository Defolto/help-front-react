import "./Alert.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { showAlert } from "./AlertSlice";

export default function Alert(): JSX.Element {
  const dispatch = useAppDispatch();
  const textAlert = useAppSelector((state) => state.alert.text);

  return (
    <div className={`Alert ${textAlert ? "Alert_show" : ""}`}>
      <div className="Alert__content">
        <p>{textAlert}</p>
        <p onClick={() => dispatch(showAlert(""))}>Закрыть</p>
      </div>
    </div>
  );
}
