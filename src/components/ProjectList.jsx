import React from "react";

function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <div className="no-projects">Нет проектов в этой категории.</div>;
  }

  return (
    <div className="projects-grid">
      {projects.map((p, idx) => (
        <div key={idx} className="project-card">
          <div className="project-thumb">
            <img src={p.img} alt={p.category} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
