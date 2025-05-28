import React, { useState } from "react";
import "./App.css";

import { ShopCard } from "./ShopCard.js";
import { ShopList } from "./ShopList.js";
import { IconSwitch } from "./IconSwitch.js";

import viewListIcon from "./view_list.svg";
import viewModuleIcon from "./view_module.svg";

export default function Store() {
  const [icon, setIcon] = useState(viewListIcon);

  const handler = () => {
    setIcon(icon === viewListIcon ? viewModuleIcon : viewListIcon);
  };
  return (
    <div className="store">
      <header className="store_header">
        <IconSwitch icon={icon} onSwitch={handler} />
      </header>
      <main className="store_main">
        {icon === viewListIcon ? <ShopCard /> : <ShopList />}
      </main>
    </div>
  );
}
