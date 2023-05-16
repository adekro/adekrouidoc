import React, { useState } from "react";
import Side from "../Side/Side";
import classes from "./Layout.module.css";
import Dash from "../Dash/Dash";
const Layout = () => {
  const [selComp, setSelComp] = useState(null);

  const onSelecthandler = (sel) => {
    setSelComp(sel);
  };
  return (
    <div className={classes.content}>
      <header className={classes.header}>heder</header>
      <div className={classes.contentbody}>
        <div className={classes.side}>
          <Side onSelect={onSelecthandler} />
        </div>
        <div className={classes.dash}>
          <Dash component={selComp} />
        </div>
      </div>
    </div>
  );
};
export default Layout;
