import "./Nav.css";

type Props = {
  items: string[];
  activeItem: string;
  onSelect: (selected: any) => void;
};

export default function Nav({
  items,
  activeItem,
  onSelect,
}: Props): JSX.Element {
  return (
    <nav className="Nav">
      {items.map((item, i) => (
        <div
          key={i}
          className={`Nav__item ${
            item === activeItem ? "Nav__item_active" : ""
          }`}
          onClick={() => onSelect(item)}
        >
          <p className="Nav__title">{item}</p>
          <div className="Nav__line"></div>
        </div>
      ))}
    </nav>
  );
}
