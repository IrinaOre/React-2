import React, { useState } from "react";
import "./App.css";
import { data } from "./data.js";
import { Toolbar } from "./Toolbar.js";
import { ProjectList } from "./ProjectList.js";

const filters = ["All", "Websites", "Flayers", "Business Cards"];

export default function Portfolio() {
  const [selected, setSelected] = useState("All");
  const [images, setImages] = useState(data);

  const handleFilterClick = (clickedFilter) => {
    setSelected(clickedFilter);
    setImages(
      clickedFilter === "All"
        ? data
        : data.filter((el) => el.category === clickedFilter)
    );
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={handleFilterClick}
      />
      <ProjectList projects={images} />
    </div>
  );
}
