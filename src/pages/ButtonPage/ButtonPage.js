import { Button } from "adekroui";
import classes from "./ButtonPage.module.css";
import classesgen from "../Page.module.css";
import Property from "../../components/Property/Property";

const listProprety = [];
const listMethods = [
  { id: 0, title: "onClick", description: "event click of the button" },
];
const listSys = [
  { id: 0, title: "children", description: "" },
  { id: 1, title: "className", description: "" },
];
//children, onClick, className
const ButtonPage = () => {
  return (
    <>
      <Button>This is a Button</Button>
      <div className={classesgen.contentprop}>
        <Property list={listProprety} type="prop" />
        <Property list={listMethods} type="method" />
        <Property list={listSys} type="sys" />
      </div>
    </>
  );
};
export default ButtonPage;
