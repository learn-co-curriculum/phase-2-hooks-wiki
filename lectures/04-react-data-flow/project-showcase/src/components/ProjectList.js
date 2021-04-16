import React, { useState } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const [search, setSearch] = useState("");

  // Assembly Line
  // [{},{},{},{}] => [{}, {}]
  const filteredProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(search.toLowerCase());
  });
  // [{},{}] => [<ProjectItem />, <ProjectItem />]
  const projectItems = filteredProjects.map((project) => {
    return <ProjectItem key={project.id} project={project} />;
  });

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchChange}
      />

      <ul className="cards">{projectItems}</ul>
    </section>
  );
}

export default ProjectList;
