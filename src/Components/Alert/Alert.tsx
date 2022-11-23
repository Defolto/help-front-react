import "./Alert.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearAlert } from "./AlertSlice";
import { ReactElement } from "react";

type PropsSampleAlert = {
  children: ReactElement;
};

function SampleAlert({ children }: PropsSampleAlert): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="Alert" onClick={() => dispatch(clearAlert())}>
      <div className="Alert__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default function Alert(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const contentAlert = useAppSelector((state) => state.alert.content);

  // Не показываем алерт
  if (!contentAlert) {
    return null;
  }

  // Показываем простой текстовый алерт
  if (typeof contentAlert === "string") {
    return (
      <SampleAlert>
        <>
          <p className="Alert__content_title">{contentAlert}</p>
          <p
            className="Alert__content_close"
            onClick={() => dispatch(clearAlert())}
          >
            Закрыть
          </p>
        </>
      </SampleAlert>
    );
  }

  // Показываем компонентый алерт
  return <SampleAlert>{contentAlert}</SampleAlert>;
}
