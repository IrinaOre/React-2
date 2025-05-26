export function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <ul className="toolbar">
      {filters.map((filter, index) => {
        return (
          <li
            key={index}
            className={
              filter === selected ? " toolbar-item-selected" : "toolbar-item"
            }
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </li>
        );
      })}
    </ul>
  );
}
