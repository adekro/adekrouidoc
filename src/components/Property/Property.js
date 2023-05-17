import React from "react";
import classes from "./Property.module.css";
import { Card } from "adekroui";

const Property = ({ list, type }) => {
  const cls = [classes.property, classes[type]];
  const clst = [classes.contentproperty, classes["content_" + type]];

  return (
    <div className={clst.join(" ")}>
      <h2>
        {type === "prop" ? "Proprietà" : ""}
        {type === "method" ? "Metodi" : ""}
        {type === "sys" ? "Sistema" : ""}
      </h2>
      {list &&
        list.map((item) => {
          return (
            <Card key={item.id} className={cls.join(" ")}>
              <h4>{item.title} </h4>
              <label>{item.description}</label>
            </Card>
          );
        })}
    </div>
  );
};
export default Property;
