export function IconSwitch({ icon, onSwitch }) {
  return (
    <img
      className="icon-switch"
      src={icon}
      alt="icon switch"
      onClick={onSwitch}
    />
  );
}
