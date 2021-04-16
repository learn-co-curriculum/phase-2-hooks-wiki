import React from "react";

function ProjectForm() {
  return (
    <section>
      <form className="form">
        <h3>Add New Project</h3>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="about">About</label>
        <textarea id="about" name="name" />
        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
