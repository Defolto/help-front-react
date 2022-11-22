import "./Preloader.css";
export default function Preloader({}): JSX.Element{
    return <div className="Preloader">
        <p className="Preloader_text">Загрузка..</p>
        <div className="Preloader_loads"/>
    </div>
}