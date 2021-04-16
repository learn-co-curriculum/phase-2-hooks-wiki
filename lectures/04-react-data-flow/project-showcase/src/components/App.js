import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
import projectData from "../data/projects";

function App() {
  const [projects, setProjects] = useState(projectData);

  return (
    <div className="App">
      <Header name="Flatiron Projects" />
      <ProjectForm />
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
