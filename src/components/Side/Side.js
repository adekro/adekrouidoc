import classes from "./Side.module.css";

const listComponent = [
  { value: "button", id: 1 },
  { value: "card", id: 2 },
  { value: "input", id: 3 },
];

const Side = ({ onSelect }) => {
  const buttonClick = (evt) => {
    onSelect(evt.target.attributes.cmd.value);
  };

  return (
    <div className={classes.side}>
      {listComponent.map((item) => {
        return (
          <button key={item.id} onClick={buttonClick} cmd={item.value}>
            {item.value}
          </button>
        );
      })}
    </div>
  );
};
export default Side;
