import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // console.log(projects[0]);

  const pl=projects.map((project)=>{
    return <ProjectItem key={project.id} technologies={project.technologies}/>
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {pl}</div>
    </div>
  );
}

export default ProjectList;
