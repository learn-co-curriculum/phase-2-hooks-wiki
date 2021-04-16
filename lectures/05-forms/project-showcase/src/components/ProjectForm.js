import React from "react";

function ProjectForm() {
  return (
    <section>
      <form className="form" autoComplete="off">
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase">
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" />

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
