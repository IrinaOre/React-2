import Portfolio from "./Portfolio.js";

export default function App() {
  return <Portfolio />;
}

// import React, { useState } from "react";
// import "./App.css";
// import { data } from "./data.js";

// Toolbar
// function Toolbar({ filters, selected, onSelectFilter }) {
//   return (
//     <ul className="toolbar">
//       {filters.map((filter, index) => {
//         return (
//           <li
//             key={index}
//             className={
//               filter === selected ? " toolbar-item-selected" : "toolbar-item"
//             }
//             onClick={() => onSelectFilter(filter)}
//           >
//             {filter}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
// Items Images
// function ProjectList({ projects }) {
//   return (
//     <ul className="project-list">
//       {projects.map((item, index) => {
//         return (
//           <li key={index} className="project-list__item">
//             <img
//               className="project-list__img"
//               src={item.img}
//               alt={`image of ${item.category} category`}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   );
// }
// App
// const filters = ["All", "Websites", "Flayers", "Business Cards"];

// const Portfolio = () => {
//   const [selected, setSelected] = useState("All");
//   const [images, setImages] = useState(data);

//   const handleFilterClick = (clickedFilter) => {
//     setSelected(clickedFilter);
//     setImages(
//       clickedFilter === "All"
//         ? data
//         : data.filter((el) => el.category === clickedFilter)
//     );
//   };

//   return (
//     <div className="portfolio">
//       <Toolbar
//         filters={filters}
//         selected={selected}
//         onSelectFilter={handleFilterClick}
//       />
//       <ProjectList projects={images} />
//     </div>
//   );
// };

// export default Portfolio;
