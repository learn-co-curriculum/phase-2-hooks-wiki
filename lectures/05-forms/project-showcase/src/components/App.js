import React, { useState } from "react";
import Header from "./Header";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

// TODO: replace this with a fetch request (eventually)
import projectData from "../data/projects";

function App() {
  const [projects, setProjects] = useState(projectData);
  const [isDarkMode, setIsDarkMode] = useState(true);

  function handleToggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  function handleFetchProjects() {
    // TODO: GET /projects
  }

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header
        name="Flatiron Projects"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <ProjectForm />
      <button onClick={handleFetchProjects}>Fetch Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
