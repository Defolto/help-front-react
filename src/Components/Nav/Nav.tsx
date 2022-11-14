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
        <p
          key={i}
          className={`Nav__item ${
            item === activeItem ? "Nav__item_active" : ""
          }`}
          onClick={() => onSelect(item)}
        >
          {item}
        </p>
      ))}
    </nav>
  );
}
