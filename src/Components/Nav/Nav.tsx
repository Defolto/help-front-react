import './Nav.css';

type Props = {
  items: string[];
  activeItem: string;
};

export default function Nav({ items, activeItem }: Props): JSX.Element {
  return (
    <nav className="Nav">
      {items.map((item) => (
        <p
          className={`Nav__item ${
            item === activeItem ? 'Nav__item_active' : ''
          }`}
        >
          {item}
        </p>
      ))}
    </nav>
  );
}
